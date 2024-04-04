import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


export default function GameCardSkeleton() {
    return (
        <>
            <Card margin={5} overflow="hidden">
                <Skeleton height={300}>
                    <CardBody>
                        <SkeletonText />
                    </CardBody>
                </Skeleton>
            </Card>
        </>
    )
}
