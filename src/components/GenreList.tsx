import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

function GenreList() {
    const { data, isLoading, error} = useGenres();
    
    if(isLoading) return <Spinner/>
    if(error) return null

    return (
        <List>
            {data.map(genre =>

                <ListItem key={genre.id}>
                    <HStack paddingY={2}>
                        <Image src={getCroppedImageURL(genre.image_background)} boxSize={8} borderRadius={10}/>
                        <Text fontSize={'lg'}>{genre.name}</Text>
                    </HStack>
                </ListItem>


            )}
        </List>
    )
}

export default GenreList
