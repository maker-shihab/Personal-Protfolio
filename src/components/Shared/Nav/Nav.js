import React from "react";
import { AiFillFileText, AiOutlineHome } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import CustomLink from "../../CustomeLink/CustomeLink";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <ul className="text-center pt-5">
        <li>
          <CustomLink to="/">
            <AiOutlineHome />
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/resume">
            <AiFillFileText />
            Resume
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/portfolio">
            <MdOutlineDeveloperMode />
            Portfolio
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">
            <FaRegEnvelope />
            Contact
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
