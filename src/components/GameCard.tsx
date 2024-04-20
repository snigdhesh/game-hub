import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Game from "../entities/Game"
import getCroppedImageURL from "../services/image-url"
import CriticScore from "./CriticScore"
import Emoji from "./Emoji"
import PlatformIconList from "./PlatformIconList"

interface GameCardProps {
  game: Game
}

{/* With below mapping, we are creating an array of platform objects */ }
const getPlatforms = (game: Game) => {
  return game.parent_platforms.map(p => p.platform)
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card key={game.id} margin={5} overflow="hidden">
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={getPlatforms(game)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">
          <Link to={'/games/' + game.slug}>
            {game.name}
          </Link>
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  )
}
