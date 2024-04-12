import useGenreData from "./useGenreData";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres =  () => useGenreData<Genre>("/genres");


export default useGenres