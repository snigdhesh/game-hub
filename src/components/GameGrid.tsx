
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid columns={{
        base: 5,
        sm: 1,
        md: 3,
        lg: 5,
      }} padding={10}>
        {games.map(game => <GameCard game={game} />)}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
