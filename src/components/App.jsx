
import LoginForm from './LoginForm/LoginForm';
import MyComponent from './MyComponent/MyComponent';

export const App = () => {
const handleLogin = (userData) => {
  console.log(userData);
};

  return (
    <div>
    <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
     <LoginForm onLogin={handleLogin}/>
     <MyComponent/>
    </div>
  );
};
