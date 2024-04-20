import { Genre } from "./Genre";
import { Platform } from "./Platform";

interface Publisher{
    id: number;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number; //It's a whole number
    rating: number; //It's a float number
    slug: string;
    description_raw: string;
    genres: Genre[];
    publishers: Publisher[]
}
