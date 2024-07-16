import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleList from './ArticleList/ArticleList';
import { fetchArticlesWithTopic } from '../article-api';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true); 
        // 2. Використовуємо HTTP-функцію
        const data = await fetchArticlesWithTopic('react');
        setArticles(
         data
        );
      } catch(error) {
setError(true);
      } finally {
        setLoading(false)
      }
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait</p>}
      {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>)}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </div>
  );
};

/* Зберігати код, пов'язаний з HTTP-запитом, безпосередньо в компоненті - не найкраща практика. У застосунку буде багато різних запитів до бекенду, можливо навіть до декількох різних бекендів, і вони будуть використовуватися в різних компонентах. До того ж код HTTP-запитів може бути складним та громіздким.

 */
