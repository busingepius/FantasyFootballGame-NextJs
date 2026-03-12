import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import League from '@/models/League';
import Team from '@/models/Team';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { code, userId } = req.body;

    if (!code || !userId) {
      return res.status(400).json({ error: 'Code and userId are required' });
    }

    const league = await League.findOne({ code: code.toUpperCase() });
    if (!league) {
      return res.status(404).json({ error: 'League not found' });
    }

    const userTeam = await Team.findOne({ userId });
    if (!userTeam) {
      return res.status(400).json({ error: 'You must create a team before joining a league' });
    }

    if (league.members.includes(userTeam._id)) {
      return res.status(400).json({ error: 'You are already in this league' });
    }

    league.members.push(userTeam._id);
    await league.save();

    res.status(200).json({ message: 'Successfully joined league', data: league });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to join league' });
  }
}
