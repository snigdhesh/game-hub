import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import { genres } from "../data/genres";
import ms from "ms";

const useGenres = () => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: genreService.getAll,
        staleTime: ms('24h'), //24hrs : No requests will be sent to backend, until this time.
        initialData: genres
    })

    return { data, error, isLoading }
}

export default useGenres