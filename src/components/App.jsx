import { useState } from "react"
import ClickCounter from "./ClickCounter/ClickCounter"

export const App = () => {
const [clicks, setClicks] = useState(0);

const handleClick = () => {
  setClicks(clicks + 1);
};

  return (
    <>
    <ClickCounter value={clicks} onUpdate={handleClick}/>
    <ClickCounter value={clicks} onUpdate={handleClick}/>
    </>
  )
}

export default App
/* 
Зверніть увагу на те, як компонент App нічого не знає про стан ClickCounter. На відміну від props, стан є повністю приватним для компонента, що його визначає. Батьківський компонент не може його змінити. Це дозволяє додавати стан до будь-якого компонента чи видаляти його без впливу на решту компонентів.
 */
