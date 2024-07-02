/* export const App = () => {
	let clicks = 0;

  const handleClick = () => {
    clicks = clicks + 1;
  };

	return <button onClick={handleClick}>Current: {clicks}</button>
}; */

/* Обробник подій handleClick оновлює локальну змінну clicks. Проте дві речі заважають змінам бути видимими:
- Локальні змінні не зберігаються між рендерами. Коли React рендерить цей компонент вдруге, він рендерить його з нуля — не враховує жодних змін у локальних змінних.
- Зміни локальних змінних не викликають повторних рендерів. React не усвідомлює необхідності повторного рендерингу компонента з новими даними. */


/* Для оновлення компонента новими даними потрібно виконати дві речі:

Зберегти дані між рендерами.
Заставити React рендерити компонент з новими даними (повторний рендеринг).
 */

/* Тут синтаксис [ clicks, setClicks ] - це деструктуризація масиву. Масив, який повертає useState, завжди має точно два елементи: перший (clicks) - це змінна стану, а другий (setClicks) - це функція для її встановлення.

У handleClick використовуємо setClicks для зміни стану clicks. */

import { useState } from "react";

export const App = () => {
 const [ clicks , setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return <button onClick={handleClick}>Current: {clicks}</button>
};
