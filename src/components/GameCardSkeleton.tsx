import { Card, CardBody, HStack, Heading, Image, Skeleton, SkeletonText } from '@chakra-ui/react'


export default function GameCardSkeleton() {
    return (
        <>
            <Card width={300} height={400} margin={5} overflow="hidden">
                <CardBody>
                    <Image />
                    <SkeletonText />
                </CardBody>
            </Card>
        </>
    )
}
