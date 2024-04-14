import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genreService from "../services/genreService";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24hrs : No requests will be sent to backend, until this time.
        initialData: { count: genres.length, results: genres } //This expects API response structure.
    })

    return { data, error, isLoading }
}

export default useGenres