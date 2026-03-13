import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Mock generic top stats
  res.status(200).json({
    data: [
      { player: { name: "Kylian Mbappé", id: 1 }, stat: 24, team: { name: "PSG", logoSrc: "/main/rm.png" }, imageSrc: "/main/m.png" },
      { player: { name: "Erling Haaland", id: 2 }, stat: 21, team: { name: "MCI", logoSrc: "/main/rm.png" }, imageSrc: "/main/m.png" },
      { player: { name: "Jude Bellingham", id: 3 }, stat: 18, team: { name: "RMA", logoSrc: "/main/rm.png" }, imageSrc: "/main/m.png" },
      { player: { name: "Vinícius Júnior", id: 4 }, stat: 16, team: { name: "RMA", logoSrc: "/main/rm.png" }, imageSrc: "/main/m.png" },
      { player: { name: "Harry Kane", id: 5 }, stat: 15, team: { name: "BAY", logoSrc: "/main/rm.png" }, imageSrc: "/main/m.png" }
    ]
  });
}