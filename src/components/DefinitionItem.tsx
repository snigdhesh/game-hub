import { Box, Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface Props{
    term: string;
    children: ReactNode | ReactNode[]
}

const DefinitionItem = ({term,children}:Props) => {
  return (
    <Box marginTop={5}>
        <Heading fontSize={20} color={"gray.600"}>{term}</Heading>
        <Text>{children}</Text>
    </Box>
  )
}

export default DefinitionItem