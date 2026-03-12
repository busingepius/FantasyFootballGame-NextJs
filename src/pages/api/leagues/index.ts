import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import League from '@/models/League';
import Team from '@/models/Team';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }

    const userTeam = await Team.findOne({ userId });
    
    if (!userTeam) {
      return res.status(200).json({ data: [] });
    }

    const leagues = await League.find({ members: userTeam._id }).populate({
      path: 'members',
      select: 'name totalPoints',
      options: { sort: { totalPoints: -1 } }
    });

    res.status(200).json({ data: leagues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch leagues' });
  }
}
