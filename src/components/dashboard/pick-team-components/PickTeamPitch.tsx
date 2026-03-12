'use client';
import { PickTeamPlayerCard } from "@/components/Cards/PlayerCards/PickTeamPlayerCard";
import { PitchContainer } from "@/components/Pitch/PitchContainer";
import { PitchPositionContainer } from "@/components/Pitch/PitchPositionContainer";
import { selectPlayers } from "@/store/slices/pickTeamSlice";
import { useSelector } from "react-redux";

export const PickTeamPitch = () => {
    const players = useSelector(selectPlayers);
    return (
        <PitchContainer>
            {players && players.map((row, rowIndex) => (
                <PitchPositionContainer key={rowIndex}>
                    {row.map((player, index) => (
                        <PickTeamPlayerCard key={index} player={player.player || null} position={player.position} />
                    ))}
                </PitchPositionContainer>
            ))}
        </PitchContainer>
    );
};
