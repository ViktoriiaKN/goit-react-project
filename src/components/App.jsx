import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleList from './ArticleList/ArticleList';

export const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        'https://hn.algolia.com/api/v1/search?query=react'
      );
      setArticles(
        response.data.hits
      ); /* response: об'єкт, що повертається у відповідь на HTTP-запит, зроблений за допомогою axios.
response.data: містить дані, які повернув сервер.
response.data.hits: це масив статей, отриманих з відповіді API.
setArticles(response.data.hits) оновлює стан articles новим масивом статей, отриманих з API. Це призводить до повторного рендеру компонента з оновленими даними. */
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && <ArticleList articles={articles}/>}
    </div>
  );
};

/* Зверніть увагу, що умовний рендерінг відбувається в батьківському компоненті App. Компонент ArticleList не знає, коли рендерити розмітку, це завдання компонента, в якому він використовується. Компонент ArticleList або рендериться, або ні, і це вирішує компонент App. */
