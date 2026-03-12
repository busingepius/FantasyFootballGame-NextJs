import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_fallback_key';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const { username, password } = req.body;
    
    // Identity server uses x-www-form-urlencoded
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { 
        sub: user._id.toString(), 
        name: user.username, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      access_token: token,
      expires_in: 86400,
      token_type: "Bearer",
      refresh_token: "mock_refresh_token_abc123"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  }
}
