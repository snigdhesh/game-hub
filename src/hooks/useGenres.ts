import apiClient from "../services/api-client"
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useGenres = () => {
    const getGenres = () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data)

    const { data, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
        staleTime: 24 * 60 * 60 * 1000, //24hrs : No requests will be sent to backend, until this time.
        initialData: { count: genres.length, results: genres } //This expects API response structure.
    })

    return { data, error, isLoading }
}

export default useGenres