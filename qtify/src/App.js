import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Navbar />

      <Logo />

      <Search placeholder={"Search a album of your choice"} />

      <Button>Give Feedback</Button>
    </div>
  );
}

export default App;
