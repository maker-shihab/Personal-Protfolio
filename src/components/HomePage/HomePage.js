import React from "react";
import './HomePage.css';
const HomePage = () => {
  return (
    <main>
      <div className="home_hero">
        <div className="home_hero_illustation">
          <div className="home_hero_illustation_img">
            <img src="https://i.ibb.co/g7vtv4H/profile.jpg" alt="header-img" />
          </div>
        </div>
        <div className="home_hero_tex">
          <h3>Web Designer</h3>
          <h2 className="home_hero_title">Maker Shihab</h2>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
