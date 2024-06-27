import React from "react";
import Alert from "./Alert/Alert";

export const App = () => {
  return (
    <>
      <Alert>Please update your email!</Alert>
      <Alert>There was an error during transaction!</Alert>
      <Alert>Payment received, thank you for your purchase!</Alert>
    </>
  );
}
