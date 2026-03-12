import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Alisson Becker", id: 6 }, stat: 12, team: "LIV" },
      { player: { name: "Ederson", id: 10 }, stat: 11, team: "MCI" },
      { player: { name: "Thibaut Courtois", id: 11 }, stat: 10, team: "RMA" },
      { player: { name: "Marc-André ter Stegen", id: 19 }, stat: 9, team: "BAR" },
      { player: { name: "Unai Simón", id: 21 }, stat: 8, team: "ATH" }
    ]
  });
}
