import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Mock generic top stats
  res.status(200).json({
    data: [
      { player: { name: "Kylian Mbappé", id: 1 }, stat: 24, team: "PSG" },
      { player: { name: "Erling Haaland", id: 2 }, stat: 21, team: "MCI" },
      { player: { name: "Jude Bellingham", id: 3 }, stat: 18, team: "RMA" },
      { player: { name: "Vinícius Júnior", id: 4 }, stat: 16, team: "RMA" },
      { player: { name: "Harry Kane", id: 5 }, stat: 15, team: "BAY" }
    ]
  });
}