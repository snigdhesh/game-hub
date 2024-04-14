
import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import platformService from "../services/platformService";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {

  const { data, error, isLoading } = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
  })

  return { data, error, isLoading }
}

export default usePlatforms;