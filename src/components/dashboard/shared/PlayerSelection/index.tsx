'use client';
import { useState, useEffect } from 'react';
import { PriceRangeSlider } from "@/components/dashboard/shared/PlayerSelection/PriceRangeSlider";
import { PlayerSelectionTable } from '@/components/dashboard/shared/PlayerSelection/PlayersTable';
import { useGetDataQuery } from '@/services/api';
import PlayerPositionRadio from '@/components/dashboard/shared/PlayerSelection/PlayerPositionRadio';
import { addPlayerToPosition } from "@/store/slices/transferSlice";
import { pickTeamAddPlayer } from "@/store/slices/pickTeamSlice";
import { useDispatch } from 'react-redux';
type PlayerSelectionCardProps={
    pitchType:PitchType
}
export const PlayerSelectionCard = ({ pitchType }:PlayerSelectionCardProps) => {
    const dispatch = useDispatch();

    const [range, setRange] = useState([4, 15]);
    const [position, setPosition] = useState("");
    const [page, setPage] = useState(1);
    const [p, setP] = useState({});

    const { data, isLoading, isSuccess, isError, error } = useGetDataQuery({
        url: '/api/Players', params: {
            page: page,
            pageSize: 20,
            minPrice: range[0],
            maxPrice: range[1],
            position: position,
        }
    });

    const handleAddPlayer = (player: FantasyPlayer) => {
        if (pitchType == "Transfers") {
            dispatch(addPlayerToPosition(player));
        } else if (pitchType == "PickTeam") {
            dispatch(pickTeamAddPlayer(player));
        }
    }


    return (
        <div className="bg-white rounded-xl shadow-md min-w-xs max-w-sm border border-gray-200">

            <div className='bg-secondary space-y-3 p-4 items-center text-gray-300 uppercase'>
                <div className=''>
                    <h4 className='font-bold text-xl text-main'>Player Selection</h4>

                </div>
                <div className='p-2'>
                    <div className='mb-6'>
                        <p className='mb-3'>Position</p>

                        <PlayerPositionRadio
                            position={position}
                            handlePosition={setPosition}
                        />
                    </div>
                    <div className='mb-6'>
                        <PriceRangeSlider range={range} handleRange={setRange} />
                    </div>
                    {/* <div className='mb-6'>
                        <PlayerSortBySelect />
                    </div> */}
                    {/* <div className='mb-6'>
                        <PlayerSearchBar />
                    </div> */}
                    <div className='text-center'>
                        <span className='bg-dark-third rounded-full text-sm py-1 px-3'>
                            {(data && isSuccess && !isLoading) &&
                                <b className='mr-1'>{data.data.totalCount}</b>
                            }
                            players shown
                        </span>
                    </div>
                </div>
            </div>


            <div className="text-center">
                {(data && isSuccess && !isLoading) &&
                    <PlayerSelectionTable {...data.data} handlePage={setPage} handleOnPlayerSelect={handleAddPlayer} />
                }
            </div>
        </div>
    );
};
