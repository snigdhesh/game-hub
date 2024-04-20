
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import { FetchResponse } from "../services/api-client";
import gameService from "../services/gameService";
import useGameQueryStore from "../stores/store";

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
