import { useEffect, useState} from 'react';
import LoginForm from './LoginForm/LoginForm';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Effect");

    return () => {
      console.log("Clean up");
    };
  });

  return (
    <div>
     <LoginForm/>
    </div>
  );
};
