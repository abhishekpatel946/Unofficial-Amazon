import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* home */}
      <Home />
      {/* footer */}
    </div>
  );
}

export default App;
