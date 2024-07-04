import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
  }, []);

  return <div>Modal</div>;
};

export default Modal;
