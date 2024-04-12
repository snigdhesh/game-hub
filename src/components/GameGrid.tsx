
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery
}


function GameGrid({ gameQuery }: Props) {
  console.log(gameQuery)
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <>

      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading && skeletons.map(skeleton =>
          // We used react children concept here
          <GameCardContainer key={skeleton} >
            <GameCardSkeleton />
          </GameCardContainer>)}

        {data.map(game =>
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
