import { Button } from '@chakra-ui/react';

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {

  const [expandable, setExpandable] = useState(false);

  const summary = expandable ? text.substring(0, 100) + "... " : text;

  return (
    <div>{summary} <Button size="xs" colorScheme='yellow' onClick={() => setExpandable(!expandable)}>{expandable ? 'Show more' : 'Show less'}</Button></div>
  )
}

export default ExpandableText