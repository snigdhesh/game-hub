import { Button, Heading, Spinner, Text, useStatStyles } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { useEffect, useState } from 'react';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useGame(slug!)
    const [description, setDescription] = useState();

    if (isLoading) return <Spinner />
    if (error || !game) throw error;


    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText text={game.description_raw}/>
            <GameAttributes game={game}/>
        </>
    )
}

export default GameDetailPage