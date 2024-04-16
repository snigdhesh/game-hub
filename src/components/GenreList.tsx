import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import useGameQueryStore from "../stores/store";


function GenreList() {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setGenreId = useGameQueryStore(s => s.setGenreId);

    if (isLoading) return <Spinner />
    if (error) return null

    return (
        <>
            <Heading marginBottom={4} marginTop={4} fontSize={24}><Text>Genres</Text></Heading>
            <List>
                {data?.results.map(genre =>

                    <ListItem key={genre.id}>
                        <HStack paddingY={2}>
                            <Image
                                src={getCroppedImageURL(genre.image_background)}
                                objectFit={'cover'}
                                boxSize={8}
                                borderRadius={10} />
                            <Button onClick={() => setGenreId(genre.id)} fontSize={'lg'} fontWeight={genre.id == selectedGenreId ? 'bold' : 'normal'} variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                )}
            </List>

        </>
    )
}

export default GenreList
