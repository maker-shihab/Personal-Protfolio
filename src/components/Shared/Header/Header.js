import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';
import { GrTwitter, GrUndo } from 'react-icons/gr';
import Nav from '../Nav/Nav';
import './Header.css';
const Header = () => {
  const handaleHome = (e) => {
    e.preventDefault();
  };
  const handaleHomeBack = (e) => {
    e.preventDefault();
  }
  // const navigate = useNavigate();
  return (
    <header className='header'>
      <div className="header_top_bar flex justify-between align-center pt-5">
        <button onClick={handaleHome}><AiOutlineHome /></button>
        <button onClick={handaleHomeBack}><GrUndo /></button>
      </div>
      <div className="header_content text-center">
        <div className="header_profile">
          <img src="https://i.ibb.co/g7vtv4H/profile.jpg" alt="profile" />
        </div>
        <div className="profile_titles pt-4">
          <h2 className="text-white text-3xl font-bold">Mohammad Shiahb</h2>
          <h3 className='text-white font-semibold text-md pt-2'>MERN STACK DEVELOPER</h3>
        </div>
        <div className="profile_socail">
          <ul className='flex justify-center align-center gap-4 py-4'>
            <li><button><FaGithub /></button></li>
            <li><button><BsLinkedin /></button></li>
            <li><button><GrTwitter /></button></li>
          </ul>
        </div>
        <div className="download_cv flex justify-center">
          <button className='btn_primary'>Download CV <FaCloudDownloadAlt /> </button>
        </div>
      </div>
      <Nav/>
      <div className="pt-5 text-center absolute bottom-6 left-0 right-0">
        <p className='text-white text-sm'>© 2021 All rights reserved.</p>
      </div>
    </header>
  );
};

export default Header;