
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid columns={{
        base: 5,
        sm: 1,
        md: 3,
        lg: 5,
      }} padding={20}>
        {isLoading && skeletons.map(skeleton =>
          // We used react children concept here
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>)}

        {games.map(game =>
          <GameCardContainer>
            <GameCard game={game} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
