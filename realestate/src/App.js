//download these
//npm i sass
//npm install react-router-dom@latest
//npm install react-icons --save
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
