import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Protfolio from "./components/Protfolios/Protfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Protfolio />} />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
