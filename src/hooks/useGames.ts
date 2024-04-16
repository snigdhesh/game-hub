
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse } from "../services/api-client";
import gameService from "../services/gameService";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../stores/store";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic: number;
  rating_top: number; //It's a whole number
  rating: number; //It's a float number
}

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  const fetchGames = (pageParam: number) => gameService.getAll({
    params: {
      //These attributes/keys are from API documenation.
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder?.value,
      search: gameQuery.searchText,
      page: pageParam
    }
  })

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    queryFn: ({ pageParam }) => fetchGames(pageParam),
    staleTime: ms('24h') //24hrs
  })
}



export default useGames;
