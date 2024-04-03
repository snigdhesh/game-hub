import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic: number;
}


const useGames = (gameQuery: GameQuery) => {
  return useData<Game>("/games",
    //This is the AxiosRequestConfig object. It has many default properties out of which "params" is one of them.
    {
      params: {
        //These attributes/keys are from API documenation.
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder?.value,
        search: gameQuery.searchText
      }
    },
    //These parameters are list of dependencies used in useEffect()
    [gameQuery]);
};

export default useGames;
