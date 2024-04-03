import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  return useData<Game>("/games",
    //This is the AxiosRequestConfig object. It has many default properties out of which "params" is one of them.
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id
      }
    },
    //These parameters are list of dependencies used in useEffect()
    [selectedGenre?.id, selectedPlatform?.id]);
};

export default useGames;
