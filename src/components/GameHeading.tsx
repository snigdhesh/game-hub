import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
    return (<>
        <Heading marginY={5} fontSize="5xl" paddingX={5} as="h1">{heading}</Heading >
    </>)
}

export default GameHeading