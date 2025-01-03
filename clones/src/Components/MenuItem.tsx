import { MenuItems } from '../types/index';
type MenuItemsProps = {
    item: MenuItems,
    addItem: () => void
}


const MenuItem = ({ item, addItem }: MenuItemsProps) => {
    return (
        <button
            onClick={() => addItem}
        >
            {item.name}
        </button>
    );
};

export default MenuItem;