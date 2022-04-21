import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import ResumePage from "./components/ResumePage/ResumePage";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
