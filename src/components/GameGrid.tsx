
import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery
}


function GameGrid({ gameQuery }: Props) {

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  if (error) return <Text>{error.message}</Text>

  const fetchedGameCount = data?.pages.reduce((acc,page)=> acc +  page.results.length,0) || 0;

  return (
    <>
      
      {/**
       * dataLength : Number of items in current page
       * hasMore: hasNextPage can be undefined also, !! converts undefined to false
       * next: It's like onClick function with calling fetchNextPage()
       * loader: Placeholder, while next page data is fetched from API.
       */}
      <InfiniteScroll dataLength={fetchedGameCount} hasMore={!!hasNextPage} next={()=> fetchNextPage()} loader={<Spinner margin={5}/>}>
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

      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
