'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/store/selectors/authSelectors';
import { FaRegStar } from "react-icons/fa";
import { PlayersCardTable } from '@/components/tables/PlayersCardTable';
import { IoMdFootball } from "react-icons/io";
import { RowCard } from '@/components/Cards/RowCard';
import { PlayersSimpleTable } from '@/components/tables/PlayersSimpleTable';
import { FaRankingStar } from "react-icons/fa6";
import { MdLooksOne } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import Image from 'next/image';
import { Fixtures } from '@/components/Fixtures';
import { UserInfoCard } from '@/components/Cards/UserInfoCard';
import { PaginationButton } from '@/components/Buttons/PaginationButton';
import { TransfersInfoCard } from '@/components/Cards/TransfersInfoCard';
import { LeaguesRankingCard } from '@/components/Cards/LeaguesRankingCard';
import { useCreateDataMutation, useGetDataQuery } from '@/services/api';
import { selectTotalPoints, setmyTeamsFromServer } from '@/store/slices/myTeamSlice';
import { MyTeamPitch } from '@/components/dashboard/my-points-components/MyTeamPitch';
import dayjs from 'dayjs';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";

const MyPointsPage = () => {
  const dispatch = useDispatch();
  const [gameweek, setGameweek] = useState<Gameweek | null>(null);

  const user = useSelector(selectUser);
  const { data: myTeam, isLoading, isSuccess, isError, error, refetch } = useGetDataQuery({
    url: '/api/GameweekTeams'
  });

  const { data: gameweekData, isLoading: gwIsLoading, isSuccess: gwIsSuccess } = useGetDataQuery({
    url: "/api/Gameweeks/current",
  });

  useEffect(() => {
    if (isSuccess && myTeam) {
      dispatch(setmyTeamsFromServer({
        totalPoints: myTeam.data.totalPoints,
        transferdCost: myTeam.data.transferdCost,
        transferedMade: myTeam.data.transferedMade,
        chip: myTeam.data.chip,
        starters: myTeam.data.starters || [],
        benched: myTeam.data.benched || []
      }));
    }
  }, [isSuccess, myTeam]);

  useEffect(() => {
    if (gwIsSuccess && gameweekData) {
      setGameweek(gameweekData.data);
    }
  }, [gwIsSuccess, gameweekData]);

  return (
    <div className="space-y-6 p-12">

      <h1 className="text-2xl font-bold">My Points - {user?.name || 'Player'}</h1>


      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <div className='p-6 pr-2'>
            <div className="bg-white border border-mid-gray  shadow-md">
              {/* Header row */}
              <div className='bg-secondary  text-main py-6 px-4'>
              

                <div className='p-6 text-xl font-bold space-y-3 border-custom relative py-3'>
                  <RowCard
                    rows={[
                      {
                        title: "Gameweek",
                        value: gameweek?.weekNumber||0,
                        flex: 1,
                        icon: FaGamepad
                      },
                      {
                        title: "Deadline",
                        value: dayjs(gameweek?.deadline).format('ddd DD MMM HH:mm'),
                        flex: 1,
                        icon: FaRegCalendarAlt
                      },
                      
                    ]}
                  />
                  


                </div>
              </div>

              <div className='py-4'>
                <MyTeamPitch />
              </div>

            </div>
          </div>


        </div>
        <div className=''>
          <div className='p-6'>
            <UserInfoCard totalPlayers={10594894} gameweekPoints={47} overallRank={137389} overallPoints={1548} username='Ahmed Fadel' teamName='Prince Fadel' />
            <div className='py-4'>
              <TransfersInfoCard totalTransfers={24} gameweekTransfers={2} inTheBank={3.2} squadValue={99.2} />
            </div>
            <div className='py-4'>
              <LeaguesRankingCard leagues={[
                {
                  name: "Overall",
                  rank: 1,
                  lastRank: 5
                },
                {
                  name: "Egypt",
                  rank: 10,
                  lastRank: 5
                },
                {
                  name: "Elgan",
                  rank: 70000,
                  lastRank: 70000
                },
              ]} />
            </div>
          </div>
        </div>

      </div>
      <div className='grid grid-cols-4'>
        <div className='p-6 col-span-3'>
          <Fixtures
            gameweek={1}
          />
        </div>


      </div>


    </div>
  );
};

export default MyPointsPage;

// Require authentication for this page
(MyPointsPage as any).requiresAuth = true;
