import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
  id: number;
  name: string;
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform} []
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //common mistake: You may create controller object, outside of useEffect() method
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        //common mistake: You may just setError with err object, instead of err.message
        setError(err.message)
      });

      //This will cancel the request if we move away from component
      //This is helpful to skip unnecessary calls to backend
      //common mistake: You may just return "controller.abort()" instead of arrow function.
      return ()=> controller.abort(); 
  }, []);

  return {games, error};
};

export default useGames;
