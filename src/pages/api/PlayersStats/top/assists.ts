import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Kevin De Bruyne", id: 4 }, stat: 15, team: { name: "MCI", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Bukayo Saka", id: 7 }, stat: 12, team: { name: "ARS", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Martin Ødegaard", id: 9 }, stat: 11, team: { name: "ARS", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Lamine Yamal", id: 68206 }, stat: 10, team: { name: "BAR", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Vinícius Júnior", id: 15 }, stat: 9, team: { name: "RMA", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } }
    ]
  });
}
