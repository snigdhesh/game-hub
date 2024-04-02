import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"

interface GameCardProps{
    game: Game
}

{/* With below mapping, we are creating an array of platform objects */}
const getPlatforms = (game: Game) =>{
  return game.parent_platforms.map(p=>p.platform)
}

export default function GameCard({game}:GameCardProps) {
  return (
    <Card key={game.id} margin={5} overflow="hidden">
          <Image src={game.background_image} />
          <CardBody>
            <Heading fontSize="xl">{game.name}</Heading>
            <PlatformIconList platforms={getPlatforms(game)}/>
          </CardBody>
        </Card>
  )
}
