'use client';
import { PitchContainer } from "@/components/Pitch/PitchContainer";

import { useSelector } from "react-redux";
import { selectPlayers } from "@/store/slices/transferSlice";
import { PitchPositionContainer } from "@/components/Pitch/PitchPositionContainer";
import { PickTeamPlayerCard } from "@/components/Cards/PlayerCards/PickTeamPlayerCard";
import { TransfersPlayerCard } from "@/components/Cards/PlayerCards/TransfersPlayerCard";
export const TransfersPitch = () => {
    const players = useSelector(selectPlayers);

    return (

        <PitchContainer>
            {players && players.map((row, rowIndex) => (
                <PitchPositionContainer key={rowIndex}>
                    {row.map((player, index) => (
                        <TransfersPlayerCard key={index} player={player.player || null} position={player.position} />
                    ))}
                </PitchPositionContainer>
            ))}
        </PitchContainer>
    );
};
