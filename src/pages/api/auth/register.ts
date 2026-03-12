import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { email, password, username, role } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Assign 'Admin' role automatically to the first created user or based on req.body for test purposes
    const userCount = await User.countDocuments();
    const assignedRole = userCount === 0 ? 'Admin' : (role === 1 ? 'Admin' : 'Player');

    const newUser = await User.create({
      email,
      username,
      password: hashedPassword,
      role: assignedRole,
    });

    res.status(201).json({ message: 'Registration successful', userId: newUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register user' });
  }
}
