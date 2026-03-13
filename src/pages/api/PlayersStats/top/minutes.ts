import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Virgil van Dijk", id: 5 }, stat: 2880, team: { name: "LIV", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "William Saliba", id: 8 }, stat: 2880, team: { name: "ARS", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Ruben Dias", id: 12 }, stat: 2790, team: { name: "MCI", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Rodri", id: 20 }, stat: 2750, team: { name: "MCI", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Jude Bellingham", id: 3 }, stat: 2600, team: { name: "RMA", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } }
    ]
  });
}
