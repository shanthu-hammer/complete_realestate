//download these
//npm i sass
//npm install react-router-dom@latest
//npm install react-icons --save
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "../src/components/Pages/Authentication/APages/login";
import Signup from "../src/components/Pages/Authentication/APages/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
