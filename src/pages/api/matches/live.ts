import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const today = new Date();
    const dateStr = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    
    // We will query for live matches or matches for the current date from FootApi
    // category 1 is typically global or top leagues.
    const options = {
      method: 'GET',
      url: `https://footapi7.p.rapidapi.com/api/category/1/events/${dateStr}`,
      headers: {
        'x-rapidapi-host': process.env.RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      }
    };

    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error("API proxy error:", error.message);
    res.status(500).json({ error: 'Failed to fetch matches data' });
  }
}
