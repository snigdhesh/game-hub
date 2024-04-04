import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props {
    rating: number
}

function Emoji({ rating }: Props) {

    //This is called "index signature". With this you are telling react, 
    //that this map contains any number of keys of type 'number'
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: '24px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '20px' },
        5: { src: bullsEye, alt: 'exceptional', boxSize: '24px' }
    }

    return (<>
        {/* Here rating is coming from props. */}
        <Image {...emojiMap[rating]} marginTop={3} />
    </>)
}

export default Emoji