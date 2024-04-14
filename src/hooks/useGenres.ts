import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import { genres } from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24hrs : No requests will be sent to backend, until this time.
        initialData: genres
    })

    return { data, error, isLoading }
}

export default useGenres