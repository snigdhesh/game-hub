import { create } from "zustand";
import { SortOrder } from "../components/SortSelector";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: SortOrder;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortorder: SortOrder) => void;
}

const getGameQueryStoreByText = (searchText: string) =>  {
    return { 
        gameQuery: { searchText } 
    };
}


const getGameQueryStoreByGenreId = (store: GameQueryStore, id: number) => {
    return {
        gameQuery: { ...store.gameQuery, genreId: id }
    }
}

const getGameQueryStoreByPlatformId = (store: GameQueryStore, id: number) => {
    return {
        gameQuery: { ...store.gameQuery, platformId: id }
    }
}

const getGameQueryStoreBySortOrder = (store: GameQueryStore, sortOrder: SortOrder) => {
    return {
        gameQuery: { ...store.gameQuery, sortOrder: sortOrder }
    }
}



const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => (getGameQueryStoreByText(searchText))),
    setGenreId: (genreId) => set(store => (getGameQueryStoreByGenreId(store, genreId))),
    setPlatformId: (platformId) => set(store => (getGameQueryStoreByPlatformId(store, platformId))),
    setSortOrder: (sortOrder) => set(store => (getGameQueryStoreBySortOrder(store, sortOrder)))

}))

export default useGameQueryStore