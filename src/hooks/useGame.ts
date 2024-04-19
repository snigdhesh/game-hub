
import { useQuery } from '@tanstack/react-query';
import gameService from '../services/gameService';

const useGame = (slug: string) => {
    const {data, error, isLoading} = useQuery({
        queryKey: ["games",slug],
        queryFn: () => gameService.get(slug)
    })
  return {data, error, isLoading};
}

export default useGame