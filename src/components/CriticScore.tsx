import { Badge } from '@chakra-ui/react'

interface Props {
    score: number
}

export default function CriticScore({ score }: Props) {
    let color = score > 70 ? 'green' : score > 60 ? 'yellow' : '';
    return <Badge colorScheme={color} fontSize={15} paddingX={3} borderRadius={5}>{score}</Badge>
}
