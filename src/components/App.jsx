import { useState } from "react";

/* Декілька станів
Ви можете мати стільки змінних стану, скільки потрібно в одному компонентії. Для кожного використовуйте окремий useState.
 */

/* Додамо до компонента App ще один стан isOpen, який буде контролювати відображення абзацу тексту. */

export const App = () => {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};

/* Кожен зі станів clicks та isOpen незалежний і оновлюється своїми відповідними функціями встановлення setClicks та setIsOpen відповідно.
 */
