
const ClickCounter = ({value, onUpdate}) => {



  return <button onClick={onUpdate}>Current: {value}</button>
  
};

export default ClickCounter


/* Читабельність коду: Назви value та onUpdate - це пропси і є досить інтуїтивними і легко зрозумілими. value явно вказує, що це значення, яке передається для відображення, а onUpdate вказує на функцію, яка буде викликана для оновлення цього значення. Передача пропсів value та onUpdate дозволяє компонентам залишатися чистими та функціональними, отримуючи необхідні дані та функції з батьківського компонента. */
