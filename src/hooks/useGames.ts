
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import {FetchResponse} from "../services/api-client";
import { Platform } from "./usePlatforms";
import gameService from "../services/gameService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic: number;
  rating_top: number; //It's a whole number
  rating: number; //It's a float number
}

const useGames = (gameQuery: GameQuery) => {

  const fetchGames = () => gameService.getAll({
    params: {
      //These attributes/keys are from API documenation.
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder?.value,
      search: gameQuery.searchText
    }
  })

  const { data, error, isLoading } = useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: fetchGames
  })

  return { data, error, isLoading }
}



export default useGames;
