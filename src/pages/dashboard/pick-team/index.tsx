'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/store/selectors/authSelectors';
import { RowCard } from '@/components/Cards/RowCard';
import { Fixtures } from '@/components/Fixtures';
import { FaUser } from "react-icons/fa";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { PlayerSelectionCard } from '@/pages/dashboard/shared/PlayerSelection';
import { PickTeamPitch } from './components/PickTeamPitch';
import { useCreateDataMutation, useGetDataQuery } from '@/services/api';
import { date } from 'yup';
import { pickTeamReset, pickTeamTotalSelectedPlayers, pickTeamTotalPrice } from '@/store/slices/pickTeamSlice';
import { RootState } from '@/store';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const TransfersPage = () => {
  const dispatch = useDispatch();
  const selectedCount = useSelector(pickTeamTotalSelectedPlayers);
  const totalCost = useSelector(pickTeamTotalPrice);
  const initialPositions = useSelector((state: RootState) => state.pickTeam.positions);
  const [gameweek, setGameweek] = useState<Gameweek | null>(null);

  const [createData, { isLoading, isSuccess, isError, error }] = useCreateDataMutation();
  const router = useRouter();
  const { data: gameweekData, isLoading: gwIsLoading, isSuccess: gwIsSuccess } = useGetDataQuery({
    url: "/api/Gameweeks/current",
  });

  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Ask for team name using SweetAlert2
    const result = await Swal.fire({
      title: 'Enter your Fantasy Team name',
      input: 'text',
      inputPlaceholder: 'My Fantasy Team',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      inputValidator: (value: string) => {
        if (!value) return 'Team name is required';
      },
    });

    if (!result.isConfirmed || !result.value) {
      toast.error('Team name is required.');
      return;
    }

    const name = result.value;

    // 2. Prepare players array
    const playersPayload: { playerId: number; slot: number }[] = [];

    initialPositions.forEach((pos) => {
      pos.players.forEach((p, index) => {
        if (p) {
          playersPayload.push({ playerId: p.id, slot: index });
        }
      });
    });

    if (playersPayload.length < 15) {
      toast.error('You must select 15 players.');
      return;
    }

    // 3. Submit using toast.promise
    await toast.promise(
      createData({
        url: '/api/FantasyTeams/my-team',
        body: {
          name,
          players: playersPayload,
        },
      }).unwrap(),
      {
        loading: 'Saving team...',
        success: 'Team saved successfully!...',
        error: (err) => err?.data?.message || 'Failed to save team',
      }
    ).then(() => {
      router.push('/dashboard/my-team');
    });
  };
  useEffect(() => {
    if (gwIsSuccess && gameweekData) {
      setGameweek(gameweekData.data);
    }
  }, [gwIsSuccess, gameweekData]);
  return (
    <div className="space-y-6 p-12">

      <h1 className="text-2xl font-bold">Pick Team</h1>


      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        <div className='lg:col-span-3'>
          <div className='p-6 pr-2'>
            <div className="bg-white border border-mid-gray  shadow-md">
              {/* Header row */}
              <div className='bg-secondary  text-main py-6 px-4'>
                <div className='p-6 text-xl font-bold space-y-3 py-3'>
                  <RowCard
                    rows={[
                      {
                        title: "Selected Players",
                        value: selectedCount + "/15",
                        flex: 1,
                        icon: FaUser
                      },
                      {
                        title: "Budget",
                        value: 100 - totalCost,
                        flex: 1,
                        icon: RiMoneyEuroBoxFill
                      },

                    ]}
                  />



                </div>
              </div>

              <div className='py-4'>
                <PickTeamPitch />
              </div>
              <div className="">
                <div className="flex items-center justify-center px-10">
                  <div className='flex items-center gap-6 justify-center p-4  w-full'>
                    <button className="btn bg-main uppercase text-white min-w-50 cursor-pointer py-3 rounded hover:bg-opacity-90 transition duration-200">
                      AUTO PICK
                    </button>
                    <button
                      onClick={() => dispatch(pickTeamReset())}
                      className="btn bg-main uppercase text-white min-w-50 cursor-pointer py-3 rounded hover:bg-opacity-90 transition duration-200">
                      RESET
                    </button>
                    <button
                      onClick={(e) => handleTeamSubmit(e)}
                      // disabled={selectedCount<=15}
                      className="btn bg-main uppercase disabled:bg-gray-300 text-white min-w-50 cursor-pointer py-3 rounded hover:bg-opacity-90 transition duration-200">
                      Create Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='py-10'>
              {gameweek &&
                <Fixtures gameweek={gameweek.id} />
              }

            </div>
          </div>


        </div>
        <div className=''>
          <div className='p-6'>
            <PlayerSelectionCard pitchType='PickTeam' />
          </div>
        </div>

      </div>



    </div>
  );
};

export default TransfersPage;

// Require authentication for this page
(TransfersPage as any).requiresAuth = true;
