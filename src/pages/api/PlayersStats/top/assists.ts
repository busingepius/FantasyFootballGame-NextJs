import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Kevin De Bruyne", id: 4 }, stat: 15, team: "MCI" },
      { player: { name: "Bukayo Saka", id: 7 }, stat: 12, team: "ARS" },
      { player: { name: "Martin Ødegaard", id: 9 }, stat: 11, team: "ARS" },
      { player: { name: "Lamine Yamal", id: 68206 }, stat: 10, team: "BAR" },
      { player: { name: "Vinícius Júnior", id: 15 }, stat: 9, team: "RMA" }
    ]
  });
}
