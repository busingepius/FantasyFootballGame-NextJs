import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Virgil van Dijk", id: 5 }, stat: 2880, team: "LIV" },
      { player: { name: "William Saliba", id: 8 }, stat: 2880, team: "ARS" },
      { player: { name: "Ruben Dias", id: 12 }, stat: 2790, team: "MCI" },
      { player: { name: "Rodri", id: 20 }, stat: 2750, team: "MCI" },
      { player: { name: "Jude Bellingham", id: 3 }, stat: 2600, team: "RMA" }
    ]
  });
}
