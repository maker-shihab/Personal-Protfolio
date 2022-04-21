import React from "react";
import {
  FaBug,
  FaCloudDownloadAlt,
  FaFreeCodeCamp,
  FaLaptopCode
} from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import "./HomePage.css";
const HomePage = () => {
  return (
    <main>
      <div className="home_hero">
        <div className="home_hero_illustation">
          <div className="home_hero_illustation_img">
            <img
              src="https://i.ibb.co/P6j5TfP/Working-amico.png"
              alt="header-img"
            />
          </div>
        </div>
        <div className="home_hero_tex">
          <h3 className="text-2xl">Web Designer</h3>
          <h2 className="home_hero_title pt-4 text-4xl font-bold">
            Maker Shihab
          </h2>
          <p className="pt-4">
            I am a Full-Stack Web Developer & Web Designer based in The USA, but
            working Worldwide. I am passionate about designing and developing
            user-friendly websites. I have all the skills to create a new high
            quality website or improve existing websites for individuals and
            organisations, using the latest techniques and trends.
          </p>
          <div className="home_hero_btns flex gap-5 mt-7">
            <button className="btn_primary">
              Download CV <FaCloudDownloadAlt />{" "}
            </button>
            <button className="btn_primary">
              Contact <FaCloudDownloadAlt />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="section_devide py-10"></div>
      <div className="works_area">
        <h3 className="section-title">
          What <span>I Do</span>
        </h3>
        <div className="works_items">
          <div className="single_work">
            <div className="single_work_thumb">
              <FaFreeCodeCamp />
            </div>
            <div className="single_work_text">
              <h3 className="work_item_title">Frond-End Development</h3>
              <p>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>
          <div className="single_work">
            <div className="single_work_thumb">
              <FaLaptopCode />
            </div>
            <div className="single_work_text">
              <h3 className="work_item_title">Frond-End Development</h3>
              <p>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>
          <div className="single_work">
            <div className="single_work_thumb">
              <FaBug />
            </div>
            <div className="single_work_text">
              <h3 className="work_item_title">Frond-End Development</h3>
              <p>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>
          <div className="single_work">
            <div className="single_work_thumb">
              <MdOutlineManageAccounts />
            </div>
            <div className="single_work_text">
              <h3 className="work_item_title">Frond-End Development</h3>
              <p>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh. Ut non sodales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section_devide py-10"></div>
      <div className="testmonial_area">
        <h3 className="section-title">Testimonials</h3>
      </div>
      <div className="section_devide py-10"></div>
      <div className="clients_area">
        <h3 className="section-title">Clients</h3>
      </div>
      <div className="section_devide py-10"></div>
      <div className="pricing_area">
        <h3 className="section-title">Pricing</h3>
      </div>
      <div className="section_devide py-10"></div>
      <div className="funfact_area">
        <h3 className="section-title">Fun <span>Facts</span></h3>
      </div>
    </main>
  );
};

export default HomePage;
