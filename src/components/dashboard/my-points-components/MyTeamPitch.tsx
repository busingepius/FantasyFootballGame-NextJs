'use client';
import { PitchContainer } from "@/components/Pitch/PitchContainer";

import { useSelector } from "react-redux";
import { selectStartersPlayers,selectBenchedPlayers } from "@/store/slices/myTeamSlice";
import { MyTeamPlayerCard } from "@/components/Cards/PlayerCards/MyTeamPlayerCard";
import { useEffect, useState } from "react";
import { PitchPositionContainer } from "@/components/Pitch/PitchPositionContainer";
import { getPositionShortName } from "@/utils/playerPositionUtils";

export const MyTeamPitch = () => {
    const starters = useSelector(selectStartersPlayers);
    const benched = useSelector(selectBenchedPlayers);

    return (
        <PitchContainer>
            <div className="flex">

            </div>
            {starters && starters.map((row,rowIndex) => (
                <PitchPositionContainer key={rowIndex}>
                    {row.map((player,index) => (
                        <MyTeamPlayerCard key={index} gwPlayer={player.player} position={player.position} allowed={player.allowed}/>
                    ))}
                </PitchPositionContainer>
            ))}
            <div className="my-10">
                <div className="flex items-center justify-center">
                    <div className='flex items-center gap-6 justify-center p-4 rounded-lg bg-[#72CF9F] w-fit'>
                        {benched && benched.map((player, index) => (
                            <div>
                                <h1 className="font-bold text-base text-center">{index + 1}. {getPositionShortName(player.player?.player?.position||"Player") }</h1>
                                <MyTeamPlayerCard gwPlayer={player.player} position={player.position}  allowed={player.allowed}/>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-xl uppercase">Subtitutions</p>
                </div>
            </div>
        </PitchContainer>
    );
};
