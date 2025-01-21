import React from "react";
import Todo from "./Components/todo/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";

const App = () => {
  return (
    <>
      <div className="container">
      <Navbar />
      <Todo />
      </div>
    </>
  );
};

export default App;
