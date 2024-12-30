import { MenuItems } from '../types/index';

type MenuItemsProps = {
    item: MenuItems
}
const MenuItem = ({ item }: MenuItemsProps) => {
    return (
        <button 
        className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-5'
        >
            <p>{item.name}</p>
            <p className='font-black'>${item.price}</p>
        </button>
    );
};

export default MenuItem;