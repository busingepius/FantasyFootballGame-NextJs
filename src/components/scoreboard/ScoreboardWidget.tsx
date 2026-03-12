import { useEffect, useState } from 'react';
import axios from 'axios';

interface Match {
  id: number;
  homeTeam: { name: string; shortName: string };
  awayTeam: { name: string; shortName: string };
  homeScore: { current: number; display: number };
  awayScore: { current: number; display: number };
  status: { description: string };
  startTimestamp: number;
}

export default function ScoreboardWidget() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches/live');
        if (response.data && response.data.events) {
          setMatches(response.data.events.slice(0, 10)); // Display top 10 matches
        } else {
          setMatches([]);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    const interval = setInterval(fetchMatches, 60000); // Poll every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="p-4 text-center">Loading Live Scores...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error loading scores: {error}</div>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white border-b pb-2">Live Scoreboard</h2>
      {matches.length === 0 ? (
        <p className="text-gray-500">No matches currently available for this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matches.map((match) => (
            <div key={match.id} className="border dark:border-gray-700 rounded-lg p-3 flex flex-col justify-between hover:shadow-lg transition">
              <div className="text-xs text-center text-gray-500 mb-2 font-semibold uppercase">
                {match.status?.description || 'Scheduled'}
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium truncate flex-1">{match.homeTeam?.name}</span>
                <span className="font-bold text-lg w-8 text-right">{match.homeScore?.display ?? '-'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium truncate flex-1">{match.awayTeam?.name}</span>
                <span className="font-bold text-lg w-8 text-right">{match.awayScore?.display ?? '-'}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
