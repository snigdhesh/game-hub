import { Card, CardBody, HStack, Heading, Image, Skeleton, SkeletonText } from '@chakra-ui/react'


export default function GameCardSkeleton() {
    return (
        <>
            <Card margin={5} overflow="hidden">
                <Skeleton height={200}>
                    <CardBody>
                        <SkeletonText />
                    </CardBody>
                </Skeleton>
            </Card>
        </>
    )
}
