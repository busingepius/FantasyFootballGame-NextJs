'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/selectors/authSelectors';
import { CustomCardContainer } from '@/components/Cards/CustomCardContainer';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function LeaguesPage() {
  const user = useSelector(selectUser);
  const [leagues, setLeagues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeagues = async () => {
    try {
      const { data } = await axios.get(`/api/leagues?userId=${user?.id || '60d0fe4f5311236168a109ca'}`);
      setLeagues(data.data);
    } catch (err) {
      toast.error('Failed to fetch leagues');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  const handleCreateLeague = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Create a Private League',
      input: 'text',
      inputLabel: 'League Name',
      inputPlaceholder: 'Enter your league name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
      }
    });

    if (formValues) {
      try {
        await axios.post('/api/leagues/create', { name: formValues, userId: user?.id || '60d0fe4f5311236168a109ca' });
        toast.success('League created!');
        fetchLeagues();
      } catch (err: any) {
        toast.error(err.response?.data?.error || 'Failed to create league');
      }
    }
  };

  const handleJoinLeague = async () => {
    const { value: code } = await Swal.fire({
      title: 'Join a Private League',
      input: 'text',
      inputLabel: 'League Code',
      inputPlaceholder: 'Enter the invite code',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write a code!';
        }
      }
    });

    if (code) {
      try {
        await axios.post('/api/leagues/join', { code, userId: user?.id || '60d0fe4f5311236168a109ca' });
        toast.success('Joined league successfully!');
        fetchLeagues();
      } catch (err: any) {
        toast.error(err.response?.data?.error || 'Failed to join league');
      }
    }
  };

  if (loading) return <div className="p-12 text-center">Loading leagues...</div>;

  return (
    <div className="space-y-6 p-12 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Leagues</h1>
          <p className="text-gray-500">Compete with your friends and climb the ranks.</p>
        </div>
        <div className="flex gap-4">
          <button onClick={handleJoinLeague} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition shadow">
            Join League
          </button>
          <button onClick={handleCreateLeague} className="bg-main text-white px-6 py-2 rounded-lg font-semibold hover:bg-main/90 transition shadow">
            Create League
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {leagues.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow border border-gray-100">
            <h3 className="text-xl text-gray-500 font-semibold">You are not in any private leagues yet.</h3>
            <p className="text-gray-400 mt-2">Create one and invite your friends, or join an existing one using an invite code.</p>
          </div>
        ) : (
          leagues.map((league) => (
            <CustomCardContainer key={league._id} title={league.name}>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4 bg-gray-100 p-3 rounded-md">
                  <span className="text-sm text-gray-600">Invite Code: <strong>{league.code}</strong></span>
                  <button onClick={() => { navigator.clipboard.writeText(league.code); toast.success('Code copied!'); }} className="text-sm text-main font-semibold hover:underline">Copy Code</button>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500 uppercase text-sm">
                      <th className="py-3 px-4">Rank</th>
                      <th className="py-3 px-4">Team</th>
                      <th className="py-3 px-4 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {league.members.map((team: any, index: number) => (
                      <tr key={team._id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-bold text-gray-700">{index + 1}</td>
                        <td className="py-3 px-4 font-medium text-gray-900">{team.name}</td>
                        <td className="py-3 px-4 text-right font-bold text-main">{team.totalPoints}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CustomCardContainer>
          ))
        )}
      </div>
    </div>
  );
}

// Require authentication for this page
(LeaguesPage as any).requiresAuth = true;
