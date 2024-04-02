import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaAndroid, FaApple } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md'; 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { IconType } from 'react-icons';

interface PlatformIconListProps {
    platforms: Platform[]
}

export default function PlatformIconList({ platforms }: PlatformIconListProps) {
    const iconMap: { [key: string]: IconType } = {
        //name: PlatStation; slug: playstation -- slug is like a text Id, it's a field that's immutable
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack marginY={5}>
            {platforms.map(platform => <Icon as={iconMap[platform.slug]} color='gray.500' />)}
        </HStack>
    )
}
