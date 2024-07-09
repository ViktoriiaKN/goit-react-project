
import LoginForm from './LoginForm/LoginForm';

export const App = () => {
const handleLogin = (userData) => {
  console.log(userData);
};

  return (
    <div>
    <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
     <LoginForm onLogin={handleLogin}/>
    </div>
  );
};
