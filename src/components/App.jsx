import { useEffect, useState } from 'react';

export const App = () => {
  const [clicks, setClicks] = useState(0);

	useEffect(() => {
		console.log("You can see me only once!");
	}, []);

  return (
    <div>
     

      <button onClick={() => setClicks(clicks + 1)}>You cklicked {clicks} times</button>
     
    </div>
  );
};
