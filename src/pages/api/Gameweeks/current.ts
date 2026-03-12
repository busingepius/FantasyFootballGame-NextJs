import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Mock current Gameweek
  res.status(200).json({
    data: {
      id: 1,
      name: "Gameweek 1",
      highestPoints: 120,
      averagePoints: 45
    }
  });
}