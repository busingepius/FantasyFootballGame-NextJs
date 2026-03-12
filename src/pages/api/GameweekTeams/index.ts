import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
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
    // In a real scenario, extract userId from req token.
    // We mocked '60d0fe4f5311236168a109ca' previously during draft saving.
    const team = await Team.findOne({ userId: '60d0fe4f5311236168a109ca' });

    // Assuming we have some static fallback or we load players
    // For now we map it to the structure expected by the frontend.
    const starters = team?.players.slice(0, 11).map((p: any) => ({
      id: p.playerId,
      name: `Player ${p.playerId}`,
      price: 10,
      position: { name: 'Forward', shortName: 'FRW' },
      isStarting: true,
      team: { abbreviation: 'TM' },
      isCaptain: false,
      isViceCaptain: false,
    })) || [];
    
    const benched = team?.players.slice(11, 15).map((p: any) => ({
      id: p.playerId,
      name: `Player ${p.playerId}`,
      price: 10,
      position: { name: 'Defender', shortName: 'DEF' },
      isStarting: false,
      team: { abbreviation: 'TM' },
      isCaptain: false,
      isViceCaptain: false,
    })) || [];

    res.status(200).json({
      data: {
        totalPoints: team?.totalPoints || 0,
        transferdCost: 0,
        transferedMade: 0,
        chip: null,
        starters,
        benched
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get team' });
  }
}
