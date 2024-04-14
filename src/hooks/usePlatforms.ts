
import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platforms";
import platformService from "../services/platformService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms }
  })

  return { data, error, isLoading }
}

export default usePlatforms;