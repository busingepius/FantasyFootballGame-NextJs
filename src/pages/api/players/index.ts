import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// A mix of hardcoded top players and possibly real data. To avoid rate limits and complex chaining,
// we provide a robust list of world-class players with realistic stats and prices.
const mockPlayers = [
  { id: 1, name: "Kylian Mbappé", team: { id: 1, name: "Real Madrid" }, position: { name: "Forward", shortName: "FRW" }, price: 12.5, image: "https://ui-avatars.com/api/?name=Kylian+Mbappé&background=random" },
  { id: 2, name: "Erling Haaland", team: { id: 2, name: "Manchester City" }, position: { name: "Forward", shortName: "FRW" }, price: 12.0, image: "https://ui-avatars.com/api/?name=Erling+Haaland&background=random" },
  { id: 3, name: "Jude Bellingham", team: { id: 1, name: "Real Madrid" }, position: { name: "Midfielder", shortName: "MID" }, price: 10.5, image: "https://ui-avatars.com/api/?name=Jude+Bellingham&background=random" },
  { id: 4, name: "Kevin De Bruyne", team: { id: 2, name: "Manchester City" }, position: { name: "Midfielder", shortName: "MID" }, price: 11.0, image: "https://ui-avatars.com/api/?name=Kevin+De+Bruyne&background=random" },
  { id: 5, name: "Virgil van Dijk", team: { id: 3, name: "Liverpool" }, position: { name: "Defender", shortName: "DEF" }, price: 7.0, image: "https://ui-avatars.com/api/?name=Virgil+van+Dijk&background=random" },
  { id: 6, name: "Alisson Becker", team: { id: 3, name: "Liverpool" }, position: { name: "Goalkeeper", shortName: "GK" }, price: 6.0, image: "https://ui-avatars.com/api/?name=Alisson+Becker&background=random" },
  { id: 7, name: "Bukayo Saka", team: { id: 4, name: "Arsenal" }, position: { name: "Midfielder", shortName: "MID" }, price: 9.5, image: "https://ui-avatars.com/api/?name=Bukayo+Saka&background=random" },
  { id: 8, name: "William Saliba", team: { id: 4, name: "Arsenal" }, position: { name: "Defender", shortName: "DEF" }, price: 6.5, image: "https://ui-avatars.com/api/?name=William+Saliba&background=random" },
  { id: 9, name: "Martin Ødegaard", team: { id: 4, name: "Arsenal" }, position: { name: "Midfielder", shortName: "MID" }, price: 9.0, image: "https://ui-avatars.com/api/?name=Martin+Odegaard&background=random" },
  { id: 10, name: "Ederson", team: { id: 2, name: "Manchester City" }, position: { name: "Goalkeeper", shortName: "GK" }, price: 6.0, image: "https://ui-avatars.com/api/?name=Ederson&background=random" },
  { id: 11, name: "Thibaut Courtois", team: { id: 1, name: "Real Madrid" }, position: { name: "Goalkeeper", shortName: "GK" }, price: 5.5, image: "https://ui-avatars.com/api/?name=Thibaut+Courtois&background=random" },
  { id: 12, name: "Ruben Dias", team: { id: 2, name: "Manchester City" }, position: { name: "Defender", shortName: "DEF" }, price: 6.5, image: "https://ui-avatars.com/api/?name=Ruben+Dias&background=random" },
  { id: 13, name: "Trent Alexander-Arnold", team: { id: 3, name: "Liverpool" }, position: { name: "Defender", shortName: "DEF" }, price: 7.5, image: "https://ui-avatars.com/api/?name=Trent+Alexander-Arnold&background=random" },
  { id: 14, name: "Mohamed Salah", team: { id: 3, name: "Liverpool" }, position: { name: "Forward", shortName: "FRW" }, price: 11.5, image: "https://ui-avatars.com/api/?name=Mohamed+Salah&background=random" },
  { id: 15, name: "Vinícius Júnior", team: { id: 1, name: "Real Madrid" }, position: { name: "Forward", shortName: "FRW" }, price: 11.0, image: "https://ui-avatars.com/api/?name=Vinicius+Junior&background=random" },
  { id: 16, name: "Harry Kane", team: { id: 5, name: "Bayern Munich" }, position: { name: "Forward", shortName: "FRW" }, price: 11.5, image: "https://ui-avatars.com/api/?name=Harry+Kane&background=random" },
  { id: 17, name: "Jamal Musiala", team: { id: 5, name: "Bayern Munich" }, position: { name: "Midfielder", shortName: "MID" }, price: 9.0, image: "https://ui-avatars.com/api/?name=Jamal+Musiala&background=random" },
  { id: 18, name: "Alphonso Davies", team: { id: 5, name: "Bayern Munich" }, position: { name: "Defender", shortName: "DEF" }, price: 6.5, image: "https://ui-avatars.com/api/?name=Alphonso+Davies&background=random" },
  { id: 19, name: "Marc-André ter Stegen", team: { id: 1, name: "Real Madrid" }, position: { name: "Goalkeeper", shortName: "GK" }, price: 5.5, image: "https://ui-avatars.com/api/?name=Marc-Andre+ter+Stegen&background=random" },
  { id: 20, name: "Rodri", team: { id: 2, name: "Manchester City" }, position: { name: "Midfielder", shortName: "MID" }, price: 9.5, image: "https://ui-avatars.com/api/?name=Rodri&background=random" }
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // We are integrating a robust array of realistic players.
  // In a truly production app, we would paginate through an API or database.
  res.status(200).json({
    data: {
      items: mockPlayers,
      pageIndex: 1,
      totalPages: 1,
      hasPreviousPage: false,
      hasNextPage: false,
      totalCount: mockPlayers.length
    }
  });
}
