import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import 'modern-normalize';
import "./index.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
     </React.StrictMode>
);


/* Режим суворої перевірки в React (Strict Mode): Якщо ваш додаток працює в режимі суворої перевірки, React буде викликати useEffect двічі під час розвитку для виявлення потенційних проблем. Це відбувається тільки в режимі розробки і не буде відбуватися в режимі продакшену.  */
