import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Kylian Mbappé", id: 1 }, stat: 250, team: "RMA" },
      { player: { name: "Erling Haaland", id: 2 }, stat: 230, team: "MCI" },
      { player: { name: "Jude Bellingham", id: 3 }, stat: 210, team: "RMA" },
      { player: { name: "Vinícius Júnior", id: 15 }, stat: 190, team: "RMA" },
      { player: { name: "Mohamed Salah", id: 14 }, stat: 180, team: "LIV" }
    ]
  });
}
