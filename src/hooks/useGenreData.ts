import apiClient from "../services/api-client"
import { useQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import genres from "../data/genres";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useGenreData = (endpoint: string) => {
    const getGenres = () => apiClient.get<FetchResponse<Genre>>(endpoint).then(res => res.data)

    const { data, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
        staleTime: 24 * 60 * 60 * 1000, //24hrs : No requests will be sent to backend, until this time.
        initialData: {count: genres.length, results: genres} //This expects API response structure.
    })

    return { data, error, isLoading }
}

export default useGenreData