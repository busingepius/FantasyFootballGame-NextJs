import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Team from '@/models/Team';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_fallback_key';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();

    // In a real app, extract token from Authorization header properly
    // but for this example, we might not pass the auth token directly to the Next.js API in all requests natively,
    // so we'll just mock a user ID or decode if token is provided.
    // Assuming the user ID is somehow provided or we just make a generic save.

    if (req.method === 'POST') {
      const { name, players } = req.body;
      
      // Since it's a demo, we will create a mock user ID if not authenticated properly
      // Ideally, decode JWT from req.headers.authorization
      const newTeam = await Team.create({
        userId: '60d0fe4f5311236168a109ca', // mock user ID
        name,
        players
      });

      return res.status(200).json({
        message: "Team saved successfully to database",
        data: newTeam
      });
    }

    if (req.method === 'GET') {
      const teams = await Team.find({});
      return res.status(200).json({ data: teams });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process team' });
  }
}
