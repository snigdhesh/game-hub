import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../stores/store";



function SearchInput() {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);

    return (<>
        {/* CSS for form is maintained in index.css */}
        <form onSubmit={(event) => {
            if (ref.current)
                setSearchText(ref.current.value)
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