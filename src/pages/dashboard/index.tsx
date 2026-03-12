'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/selectors/authSelectors';
import { FaRegStar, FaUserCircle } from "react-icons/fa";
import Image from 'next/image';
import { SimpleCard } from '@/components/Cards/SimpleCard';
import Link from 'next/link';
import { PlayersCardTable } from '@/components/tables/PlayersCardTable';
import { IoMdFootball } from "react-icons/io";
import { RowCard } from '@/components/Cards/RowCard';
import ScoreboardWidget from '@/components/Scoreboard/ScoreboardWidget';
import { PlayersSimpleTable } from '@/components/tables/PlayersSimpleTable';
import { useGetDataQuery } from '@/services/api';
import { RxTextAlignMiddle } from "react-icons/rx";
import { PiRankingThin } from "react-icons/pi";
import { CustomCardContainer } from '@/components/Cards/CustomCardContainer';
import { cn } from '@/utils/twMerge'; 

const PlayerDashboardHome = () => {
  const user = useSelector(selectUser);
  const [topGoals, setTopGoals] = useState(null);
  const [topAssists, setTopAssists] = useState(null);
  const [topCleanSheets, setTopCleanSheets] = useState(null);
  const [topMinutes, setTopMinutes] = useState(null);
  const [topSaves, setTopSaves] = useState(null);
  const [topTotalPoints, setTopTotalPoints] = useState(null);
  const [gameweek, setGameweek] = useState<Gameweek | null>(null);

  const gameweekQuery = useGetDataQuery({ url: '/api/Gameweeks/current' });
  const goalsQuery = useGetDataQuery({ url: '/api/PlayersStats/top/goals', params: { limit: 5 } });
  const assistsQuery = useGetDataQuery({ url: '/api/PlayersStats/top/assists', params: { limit: 5 } });
  const cleanSheetsQuery = useGetDataQuery({ url: '/api/PlayersStats/top/cleansheets', params: { limit: 5 } });
  const minutesQuery = useGetDataQuery({ url: '/api/PlayersStats/top/minutes', params: { limit: 5 } });
  const savesQuery = useGetDataQuery({ url: '/api/PlayersStats/top/saves', params: { limit: 5 } });
  const pointsQuery = useGetDataQuery({ url: '/api/PlayersStats/top/totalpoints', params: { limit: 5 } });

  useEffect(() => {
    if (gameweekQuery.data && gameweekQuery.isSuccess) {
      setGameweek(gameweekQuery.data.data);
    }
  }, [goalsQuery.data, goalsQuery.isSuccess]);
  useEffect(() => {
    if (goalsQuery.data && goalsQuery.isSuccess) {
      setTopGoals(goalsQuery.data.data);
    }
  }, [goalsQuery.data, goalsQuery.isSuccess]);

  useEffect(() => {
    if (assistsQuery.data && assistsQuery.isSuccess) {
      setTopAssists(assistsQuery.data.data);
    }
  }, [assistsQuery.data, assistsQuery.isSuccess]);

  useEffect(() => {
    if (cleanSheetsQuery.data && cleanSheetsQuery.isSuccess) {
      setTopCleanSheets(cleanSheetsQuery.data.data);
    }
  }, [cleanSheetsQuery.data, cleanSheetsQuery.isSuccess]);

  useEffect(() => {
    if (minutesQuery.data && minutesQuery.isSuccess) {
      setTopMinutes(minutesQuery.data.data);
    }
  }, [minutesQuery.data, minutesQuery.isSuccess]);

  useEffect(() => {
    if (savesQuery.data && savesQuery.isSuccess) {
      setTopSaves(savesQuery.data.data);
    }
  }, [savesQuery.data, savesQuery.isSuccess]);

  useEffect(() => {
    if (pointsQuery.data && pointsQuery.isSuccess) {
      setTopTotalPoints(pointsQuery.data.data);
    }
  }, [pointsQuery.data, pointsQuery.isSuccess]);

  return (
    <div className="space-y-6 p-12">

      <ScoreboardWidget />

      <div className="flex justify-center items-center my-6 px-6">
        <div
          className={cn(
            "relative flex items-center gap-6 px-8 py-6 rounded-2xl shadow-xl bg-gradient-to-r from-main to-secondary transition-transform duration-300 hover:scale-105 w-full"
          )}
        >
          {/* Avatar or fallback icon */}
          <div className="flex-shrink-0">
            {user?.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name || "User Avatar"}
                width={64}
                height={64}
                className="rounded-full border-4 border-white shadow"
              />
            ) : (
              <FaUserCircle className="text-white text-6xl drop-shadow" />
            )}
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white uppercase">
              👋 Welcome back, {user?.name || 'Player'}!
            </div>
            <div className="text-white text-opacity-80 mt-1 text-base md:text-lg font-medium">
              Ready for another week of fantasy football action?
            </div>
          </div>
        </div>
      </div>
      

      {/* <div className="grid grid-cols-3 gap-6">
        <div className='px-6'>
          <SimpleCard
            title='Average Points'
            description='50'
            descriptionClasses='text-6xl text-dark-third font-heading font-bold font-var-heading-500'
            containerClasses='bg-secondary text-center'
          />
        </div>
        <div className='px-6'>
          <SimpleCard
            title='My Points'
            description='50'
            descriptionClasses='text-6xl text-dark-third font-heading font-bold font-var-heading-500'
            containerClasses='bg-secondary text-center'
          />
        </div>
        <div className='px-6'>
          <SimpleCard
            title='Highest Points'
            description='50'
            descriptionClasses='text-6xl text-dark-third font-heading font-bold font-var-heading-500'
            containerClasses='bg-secondary text-center'
          />
        </div>
      </div> */}

      <div className='grid grid-cols-1 xl:grid-cols-4 gap-6'>
        <div className='xl:col-span-3'>
          <div className='p-6 pr-2'>
            <div className="bg-white border border-mid-gray  shadow-md">
              <div className='p-6 bg-secondary'>
                <div className="">
                  <h2 className="text-4xl font-bold text-white mb-6">{gameweek && gameweek.name}</h2>

                  <Link href="/dashboard/my-team">
                    <button className="btn bg-main uppercase text-white w-1/2 cursor-pointer py-2 rounded hover:bg-opacity-90 transition duration-200">
                      My Team
                    </button>
                  </Link>
                </div>
              </div>
              <div className='p-6 text-xl font-bold space-y-3'>
                <RowCard
                  rows={[
                    {
                      title: "Highest Points",
                      value: gameweek?.highestPoints ?? 0,
                      flex: 2,
                      icon: PiRankingThin
                    }
                  ]}
                />
                <RowCard
                  rows={[
                    {
                      title: "Average Points",
                      value: gameweek?.averagePoints ?? 0,
                      flex: 2,
                      icon: RxTextAlignMiddle
                    }
                  ]}
                />


              </div>


            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
            <div className="p-4 transform transition duration-500 hover:scale-105">
              {topTotalPoints && (
                <PlayersCardTable
                  title="TOTAL POINTS"
                  link="/dashboard/leaderboard/points"
                  topStats={topTotalPoints}
                />
              )}
            </div>
            <div className="p-4 transform transition duration-500 hover:scale-105">
              {topGoals && (
                <PlayersCardTable
                  title="GOALS"
                  link="/dashboard/leaderboard/goals"
                  topStats={topGoals}
                />
              )}
            </div>

            <div className="p-4 transform transition duration-500 hover:scale-105">
              {topAssists && (
                <PlayersCardTable
                  title="ASSISTS"
                  link="/dashboard/leaderboard/assists"
                  topStats={topAssists}
                />
              )}
            </div>

            <div className="p-4 transform transition duration-500 hover:scale-105">
              {topCleanSheets && (
                <PlayersCardTable
                  title="CLEAN SHEETS"
                  link="/dashboard/leaderboard/cleansheets"
                  topStats={topCleanSheets}
                />
              )}
            </div>

            <div className="p-4 transform transition duration-500 hover:scale-105">
              {topMinutes && (
                <PlayersCardTable
                  title="MINUTES PLAYED"
                  link="/dashboard/leaderboard/minutes"
                  topStats={topMinutes}
                />
              )}
            </div>

            <div className="p-4 transform transition duration-500 hover:scale-105">
              {topSaves && (
                <PlayersCardTable
                  title="SAVES"
                  link="/dashboard/leaderboard/saves"
                  topStats={topSaves}
                />
              )}
            </div>




          </div>
        </div>
        <div className=''>
          <div className='p-6'>
            <div className="bg-gray-100 shadow-lg overflow-y-auto space-y-5">
              <CustomCardContainer title="🔥 Player Watch">
  <div className="p-4 space-y-3 text-sm text-gray-800">
    <div>
      <strong>Takefusa Kubo</strong> has scored in 4 consecutive games. A must-watch for differential picks.
    </div>
    <div>
      <strong>Álex Baena</strong> is creating 2.1 chances per match and has taken over set pieces for Villarreal.
    </div>
    <div>
      <strong>Rodrygo</strong> is finding form again with 2 goals and 1 assist in his last 2 appearances.
    </div>
  </div>
</CustomCardContainer>

<CustomCardContainer title="🕵️ Scouting & News">
  <div className="p-4 space-y-3 text-sm text-gray-800">
    <div>
      Scouts report <strong>Güler</strong> is fully fit and expected to start next week for Real Madrid.
    </div>
    <div>
      <strong>Isco</strong> impressed again with 4 key passes and 1 assist in Betis’ latest fixture.
    </div>
    <div>
      <strong>Chimy Ávila</strong> is back in full training and could make a surprise start this weekend.
    </div>
  </div>
</CustomCardContainer>

<CustomCardContainer title="🚑 Injury Report">
  <div className="p-4 space-y-3 text-sm text-red-700">
    <div>
      <strong>Pedri</strong> out with groin injury — expected return: Gameweek 6.
    </div>
    <div>
      <strong>David Alaba</strong> confirmed ACL tear — out for the season.
    </div>
    <div>
      <strong>Marcos Llorente</strong> missed training due to a minor knock, 50% chance of playing.
    </div>
  </div>
</CustomCardContainer>

<CustomCardContainer title="📢 Transfer Rumors">
  <div className="p-4 space-y-3 text-sm text-blue-800">
    <div>
      Rumors suggest <strong>Antoine Griezmann</strong> could move to MLS next season.
    </div>
    <div>
      <strong>Sevilla</strong> are eyeing <strong>Bryan Zaragoza</strong> as a long-term attacking option.
    </div>
    <div>
      <strong>Valencia</strong> interested in loaning <strong>Javi Guerra</strong> from Real Madrid.
    </div>
  </div>
</CustomCardContainer>

<CustomCardContainer title="🧠 Scout's Note">
  <div className="p-4 space-y-3 text-sm text-gray-700">
    <div>
      Consider <strong>Joselu</strong> for cheap forward cover — he's starting regularly and has a strong aerial threat.
    </div>
    <div>
      <strong>Raphinha</strong> could explode with Barcelona's favorable upcoming fixtures.
    </div>
    <div>
      <strong>Lo Celso</strong> is finally getting consistent minutes — sleeper pick for midfield depth.
    </div>
  </div>
</CustomCardContainer>

<CustomCardContainer title="📊 Stat Spotlight">
  <div className="p-4 space-y-3 text-sm text-indigo-800">
    <div>
      <strong>Unai Simón</strong>: 5 clean sheets in 7 matches, top among La Liga goalkeepers.
    </div>
    <div>
      <strong>Bellingham</strong>: 6 goals from midfield — most in the league so far.
    </div>
    <div>
      <strong>Gerard Moreno</strong>: leads in expected goals (xG) with 6.2 — due for a breakout.
    </div>
  </div>
</CustomCardContainer>







            </div>

            {/* <PlayersSimpleTable title='team of the week' icon={<FaRegStar />} rows={[
              {
                player: 'Vini Jr',
                team: 'RMA',
                position: 'GK',
                score: '18',
                image: '/main/rm.png',
              },
              {
                player: 'K. Mbappé',
                team: 'PSG',
                position: 'DEF',
                score: '23',
                image: '/main/rm.png',
              },
              {
                player: 'Vini Jr',
                team: 'RMA',
                position: 'DEF',
                score: '18',
                image: '/main/rm.png',
              },
              {
                player: 'K. Mbappé',
                team: 'PSG',
                position: 'DEF',
                score: '23',
                image: '/main/rm.png',
              },
              {
                player: 'Vini Jr',
                team: 'RMA',
                position: 'DEF',
                score: '18',
                image: '/main/rm.png',
              },
              {
                player: 'K. Mbappé',
                team: 'PSG',
                position: 'MID',
                score: '23',
                image: '/main/rm.png',
              },
              {
                player: 'Vini Jr',
                team: 'RMA',
                position: 'MID',
                score: '18',
                image: '/main/rm.png',
              },
              {
                player: 'K. Mbappé',
                team: 'PSG',
                position: 'MID',
                score: '23',
                image: '/main/rm.png',
              },
              {
                player: 'Vini Jr',
                team: 'RMA',
                position: 'MID',
                score: '18',
                image: '/main/rm.png',
              },
              {
                player: 'K. Mbappé',
                team: 'PSG',
                position: 'FRW',
                score: '23',
                image: '/main/rm.png',
              },
              {
                player: 'Vini Jr',
                team: 'RMA',
                position: 'FRW',
                score: '18',
                image: '/main/rm.png',
              },

            ]} /> */}
          </div>
        </div>

      </div>
      <div className='grid grid-cols-2'>
        <div className='p-6'>

        </div>
        <div className='p-6'>

        </div>

      </div>


    </div>
  );
};

export default PlayerDashboardHome;

// Require authentication for this page
(PlayerDashboardHome as any).requiresAuth = true;
