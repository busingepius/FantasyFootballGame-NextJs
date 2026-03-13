import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Kylian Mbappé", id: 1 }, stat: 250, team: { name: "RMA", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Erling Haaland", id: 2 }, stat: 230, team: { name: "MCI", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Jude Bellingham", id: 3 }, stat: 210, team: { name: "RMA", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Vinícius Júnior", id: 15 }, stat: 190, team: { name: "RMA", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Mohamed Salah", id: 14 }, stat: 180, team: { name: "LIV", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } }
    ]
  });
}
