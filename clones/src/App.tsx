import MenuItem from "./Components/MenuItem"
import { menuItems } from "./db/db"
import useOrder from "./hooks/useOrder"


function App() {
  const { addItem } = useOrder();
  return (
    <>
      <h1>Calculadora de Cropinas y Consumo</h1>


      <div>
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
          />
        ))}
      </div>
    </>
  )
}

export default App
