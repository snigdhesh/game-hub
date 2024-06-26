import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "../stores/store";

export interface SortOrder{
    value: string;
    label: string;
}

function SortSelector() {
    const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
    const setSortOrder = useGameQueryStore(s => s.setSortOrder)

    const sortOrders = [
        //All these values are from API documenation, labels are for display purposes only.
        //We add hyphen to values, cause API documenation says to add it, if you want to sort it in reverse order. (which is latest first)
        { value: '', label: 'Relavance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' }
    ]

    //Instead we can do following to find a label
    //const currentSortOrder = sortOrders.find(order=> order.value == selectedOrder);
    
    return (<>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                { selectedSortOrder ? selectedSortOrder.label : "Order by: Relavance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map(sortOrder =>
                    <MenuItem
                        key={sortOrder.value}
                        value={sortOrder.value}
                        onClick={() => {
                            setSortOrder(sortOrder)
                        }}>
                        {sortOrder.label}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    </>)
}

export default SortSelector