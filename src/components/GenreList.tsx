import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";


interface Props{
    onSelectGenre: (genre: Genre) => void;
}

function GenreList({onSelectGenre}: Props) {
    const { data, isLoading, error} = useGenres();
    
    if(isLoading) return <Spinner/>
    if(error) return null

    return (
        <List>
            {data.map(genre =>

                <ListItem key={genre.id}>
                    <HStack paddingY={2}>
                        <Image src={getCroppedImageURL(genre.image_background)} boxSize={8} borderRadius={10}/>
                        <Button onClick={()=>onSelectGenre(genre)} fontSize={'lg'} variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList
