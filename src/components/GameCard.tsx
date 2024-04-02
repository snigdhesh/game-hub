import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface GameCardProps{
    game: Game
}

export default function GameCard({game}:GameCardProps) {
  return (
    <Card key={game.id} margin={5} overflow="hidden">
          <Image src={game.background_image} />
          <CardBody>
            <Heading fontSize="xl">{game.name}</Heading>
          </CardBody>
        </Card>
  )
}
