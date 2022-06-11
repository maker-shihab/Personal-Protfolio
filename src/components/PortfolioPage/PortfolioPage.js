import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import "./PortfolioPage.css";
import SinglePort from "./SinglePort/SinglePort";

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);
  return (
    <main className="pt-14">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="funfact_area">
        <h3 className="section-title">Protfolio</h3>
      </div>
      <div className="portfolios_content">
        <div className="portfolio_items">
          {portfolio.map((portfolio) => (
            <SinglePort key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
