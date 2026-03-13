import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    data: [
      { player: { name: "Alisson Becker", id: 6 }, stat: 12, team: { name: "LIV", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Ederson", id: 10 }, stat: 11, team: { name: "MCI", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Thibaut Courtois", id: 11 }, stat: 10, team: { name: "RMA", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Marc-André ter Stegen", id: 19 }, stat: 9, team: { name: "BAR", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } },
      { player: { name: "Unai Simón", id: 21 }, stat: 8, team: { name: "ATH", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" } }
    ]
  });
}
