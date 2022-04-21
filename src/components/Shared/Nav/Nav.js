import React from 'react';
import { AiFillFileText, AiOutlineHome } from 'react-icons/ai';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <nav>
      <ul className='text-center pt-5'>
        <li>
          <Link to={'/'}><AiOutlineHome />Home</Link>
        </li>
        <li>
          <Link to={'/resume'}><AiFillFileText />Resume</Link>
          </li>
        <li>
          <Link to={'/portfolio'}><MdOutlineDeveloperMode />Portfolio</Link>
          </li>
        <li>
          <Link to={'/contact'}><FaRegEnvelope />Contact</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;