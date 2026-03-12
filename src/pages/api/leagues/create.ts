import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import League from '@/models/League';
import Team from '@/models/Team';

// Generates a random alphanumeric code
const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { name, userId } = req.body;
    
    if (!name || !userId) {
      return res.status(400).json({ error: 'Name and userId are required' });
    }

    // Find the user's team to automatically add them to their own league
    const userTeam = await Team.findOne({ userId });
    
    if (!userTeam) {
      return res.status(400).json({ error: 'You must create a team before creating a league' });
    }

    let code = generateCode();
    // Ensure uniqueness
    while (await League.findOne({ code })) {
      code = generateCode();
    }

    const newLeague = await League.create({
      name,
      code,
      ownerId: userId,
      members: [userTeam._id]
    });

    res.status(201).json({ message: 'League created successfully', data: newLeague });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create league' });
  }
}
