
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { platforms } from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const usePlatforms = () => {

  const getPlatforms = () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res=>res.data)

  const { data, error, isLoading } = useQuery({
    queryKey: ['platforms'],
    queryFn: getPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length, results: platforms}
  })

  return { data, error, isLoading }
}

export default usePlatforms;