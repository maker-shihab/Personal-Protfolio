import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import './SinglePort.css';
const SinglePort = (props) => {
  const {thumb, title, pragrap, portLink} = props.portfolio;
  return (
    <div className='portfolio_single'>
      <div className="portfolio_thumb">
        <img src={thumb} alt="thumb" />
        <div className="portfolio_socail">
          <span>item</span> <button><AiOutlineHeart /></button>
        </div>
      </div>
      <div className="portfolio_text">
        <h2 className="portfolio_title">{title}</h2>
        <p>{pragrap}</p>
        <a href={portLink} target="_blank" rel="noreferrer">View Live</a>
      </div>
    </div>
  );
};

export default SinglePort;