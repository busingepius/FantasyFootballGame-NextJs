'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/store/selectors/authSelectors';
import { RowCard } from '@/components/Cards/RowCard';
import { Fixtures } from '@/components/Fixtures';
import { FaUser } from "react-icons/fa";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { PlayerSelectionCard } from '@/pages/dashboard/shared/PlayerSelection';
import { TransfersPitch } from './components/TransfersPitch';
import { useCreateDataMutation, useGetDataQuery } from '@/services/api';
import { date } from 'yup';
import { resetTransfers, selectTotalSelectedPlayers, selectTotalPrice, setTransfersFromServer, selectFreeTransfers, selectTransfersCost, selectTransferedPlayers } from '@/store/slices/transferSlice';
import { GiPayMoney } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import Swal from 'sweetalert2';
import { showError } from '@/utils/toastUtils';
import toast from 'react-hot-toast';

const TransfersPage = () => {
  const dispatch = useDispatch();
    const [gameweek, setGameweek] = useState<Gameweek | null>(null);
  const selectedCount = useSelector(selectTotalSelectedPlayers);
  const totalCost = useSelector(selectTotalPrice);
  const freeTransfers = useSelector(selectFreeTransfers);
  const TransfersCost = useSelector(selectTransfersCost);
  const transferedPlayers = useSelector(selectTransferedPlayers);
  const [createData, { isLoading: postIsLoading, isSuccess: postIsSuccess, isError: postIsError, error: postError }] = useCreateDataMutation();
  const { data: myTeam, isLoading, isSuccess, isError, error,refetch } = useGetDataQuery({
    url: '/api/FantasyTeams/my-team'
  });

const { data: gameweekData, isLoading: gwIsLoading, isSuccess: gwIsSuccess } = useGetDataQuery({
    url: "/api/Gameweeks/current",
  });

  useEffect(() => {
    if (isSuccess && myTeam) {
      dispatch(setTransfersFromServer({
        teamName: myTeam.data.name,
        squadValue: myTeam.data.squadValue,
        budget: myTeam.data.inTheBank,
        freeTransfers: myTeam.data.freeTransfers,
        hasUnlimitedTransfers:myTeam.data.hasUnlimitedTransfers,
        players: myTeam.data.players || []
      }));
    }
  }, [isSuccess, myTeam]);
useEffect(() => {
    if (gwIsSuccess && gameweekData) {
      setGameweek(gameweekData.data);
    }
  }, [gwIsSuccess, gameweekData]);
  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 2. Prepare players array
    const playersPayload: { playerInId: number | null; playerOutId: number | null }[] = [];
    let transfersHTML = `<table style="width:100%;text-align:left;"><thead><tr><th>Out</th><th>In</th></tr></thead><tbody>`;

    transferedPlayers.forEach((p) => {
      if (p) {
        playersPayload.push({ playerInId: p.playerIn?.id || null, playerOutId: p.playerOut?.id || null });
        transfersHTML += `<tr>
      <td>${p.playerOut?.name || '-'}</td>
      <td>${p.playerIn?.name || '-'}</td>
    </tr>`;
      }
    });

    if (playersPayload.length <= 0) {
      showError('You didnt made any transfer');
      return;
    }

    // Confirm transfers table
    const confirm = await Swal.fire({
      title: 'Confirm Transfers',
      html: transfersHTML,
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      width: 600,
    });

    if (!confirm.isConfirmed) return;

    // 3. Submit using toast.promise
    await toast.promise(
      createData({
        url: '/api/Transfers',
        body: {
          transfers: playersPayload,
        },
      }).unwrap(),
      {
        loading: 'Saving team...',
        success: 'Transfers saved successfully!...',
        error: (err) => err?.data?.message || 'Failed to save team',
      }
    ).then(() => {
refetch()
    });
  };
  return (
    <div className="space-y-6 p-12">

      <h1 className="text-2xl font-bold">Transfers</h1>


      <div className='grid grid-cols-1 xl:grid-cols-4 gap-6'>
        <div className='xl:col-span-3'>
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
                  <RowCard
                    rows={[
                      {
                        title: "Free Transfers",
                        value: freeTransfers,
                        flex: 1,
                        icon: BiTransfer
                      },
                      {
                        title: "Transfers Cost",
                        value: TransfersCost,
                        flex: 1,
                        icon: GiPayMoney
                      },

                    ]}
                  />


                </div>
              </div>

              <div className='py-4'>
                <TransfersPitch />
              </div>
              <div className="">
                <div className="flex items-center justify-center px-10">
                  <div className='flex items-center gap-6 justify-center p-4  w-full'>
                    <button className="btn bg-main uppercase text-white min-w-50 cursor-pointer py-3 rounded hover:bg-opacity-90 transition duration-200">
                      AUTO PICK
                    </button>
                    <button
                      onClick={() => dispatch(resetTransfers())}
                      className="btn bg-main uppercase text-white min-w-50 cursor-pointer py-3 rounded hover:bg-opacity-90 transition duration-200">
                      RESET
                    </button>
                    <button
                      onClick={(e) => handleTeamSubmit(e)}
                      disabled={transferedPlayers.length <= 0}
                      className="btn bg-main uppercase disabled:bg-gray-300 text-white min-w-50 cursor-pointer py-3 rounded hover:bg-opacity-90 transition duration-200">
                      Make Transfers
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
            <PlayerSelectionCard pitchType='Transfers' />
          </div>
        </div>

      </div>



    </div>
  );
};

export default TransfersPage;

// Require authentication for this page
(TransfersPage as any).requiresAuth = true;
