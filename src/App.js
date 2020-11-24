import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div>
      <Navbar />
      <SignUp />
    </div>
  );
};

export default App;
