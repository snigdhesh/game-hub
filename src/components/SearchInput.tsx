import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
    onSearch: (searchText: string) => void
}


function SearchInput({ onSearch }: Props) {
    const ref = useRef<HTMLInputElement>(null);

    return (<>
        {/* CSS for form is maintained in index.css */}
        <form onSubmit={(event) => {
            if (ref.current)
                onSearch(ref.current.value)
            event.preventDefault()
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={10} placeholder="Search games" variant="filled" />
            </InputGroup>
        </form>
    </>)
}

export default SearchInput