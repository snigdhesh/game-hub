import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../stores/store";

function GameHeading() {
    const genreId = useGameQueryStore(s => s.gameQuery.genreId)
    const genre = useGenre(genreId);

    const platformId = useGameQueryStore(s => s.gameQuery.platformId) 
    const { data: platforms } = usePlatforms();
    const platform = platforms?.results.find(platform => platform.id === platformId)

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games: Developed by Naga Vadlapudi`
    return (<>
        <Heading marginY={5} fontSize="5xl" paddingX={5} as="h1">{heading}</Heading >
    </>)
}

export default GameHeading