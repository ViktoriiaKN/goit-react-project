import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import 'modern-normalize';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
     </React.StrictMode>
);


/* Режим суворої перевірки в React (Strict Mode): Якщо ваш додаток працює в режимі суворої перевірки, React буде викликати useEffect двічі під час розвитку для виявлення потенційних проблем. Це відбувається тільки в режимі розробки і не буде відбуватися в режимі продакшену.  */
