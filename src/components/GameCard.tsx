import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageURL from "../services/image-url"

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
        <Heading fontSize="xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={getPlatforms(game)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}
