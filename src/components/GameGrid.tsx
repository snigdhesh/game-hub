
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery
}


function GameGrid({ gameQuery }: Props) {

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  if (error) return <Text>{error.message}</Text>

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading && skeletons.map(skeleton =>
          // We used react children concept here
          <GameCardContainer key={skeleton} >
            <GameCardSkeleton />
          </GameCardContainer>)}
        {data?.pages.map((page, index) =>

          <React.Fragment key={index}>

            {
              page.results.map(game =>
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>)
            }

          </React.Fragment>
        )}
      </SimpleGrid>

      {
        hasNextPage &&
        <Button margin={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading ..' : 'Load more'}
        </Button>
      }
    </>
  );
}

export default GameGrid;
