import ClickCounter from "./ClickCounter/ClickCounter"

export const App = () => {
  return (
    <>
    <ClickCounter/>
    <ClickCounter/>
    </>
  )
}

export default App
/* 
Зверніть увагу на те, як компонент App нічого не знає про стан ClickCounter. На відміну від props, стан є повністю приватним для компонента, що його визначає. Батьківський компонент не може його змінити. Це дозволяє додавати стан до будь-якого компонента чи видаляти його без впливу на решту компонентів.
 */
