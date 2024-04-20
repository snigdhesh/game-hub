
import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import platformService from "../services/platformService";
import { FetchResponse } from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";

const usePlatforms = () => {

  const { data, error, isLoading } = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  })

  return { data, error, isLoading }
}

export default usePlatforms;