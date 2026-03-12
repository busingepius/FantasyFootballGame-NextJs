import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Alisson Becker", id: 6 }, stat: 95, team: "LIV" },
      { player: { name: "Ederson", id: 10 }, stat: 85, team: "MCI" },
      { player: { name: "Thibaut Courtois", id: 11 }, stat: 80, team: "RMA" },
      { player: { name: "Marc-André ter Stegen", id: 19 }, stat: 75, team: "BAR" },
      { player: { name: "Unai Simón", id: 21 }, stat: 70, team: "ATH" }
    ]
  });
}
