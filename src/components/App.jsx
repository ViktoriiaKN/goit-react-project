import ArticleList from './ArticleList/ArticleList';
import { fetchArticlesWithTopic } from '../article-api';
import SearchForm from './SearchForm/SearchForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const value = useSelector(state => state.some.value);

  /* Оскільки тепер користувач сам вводить рядок для пошуку статей, нам не потрібний ефект. Таким чином, будемо писати код всередині функції handleSearch, яка виконується при сабміті форми. Робимо її асинхронною і додаємо всередину код, пов'язаний з HTTP-запитом.

 */

  const handleSearch = async(topic) => {
try {
  setArticles([]);
  setError(false);
  setLoading(true);
  const data = await fetchArticlesWithTopic(topic);
  setArticles(data);
} catch (error) {
  setError(true);
} finally {
  setLoading(false)
}
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch}/>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait</p>}
      {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>)}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </div>
  );
};

/* Зберігати код, пов'язаний з HTTP-запитом, безпосередньо в компоненті - не найкраща практика. У застосунку буде багато різних запитів до бекенду, можливо навіть до декількох різних бекендів, і вони будуть використовуватися в різних компонентах. До того ж код HTTP-запитів може бути складним та громіздким.

 */
