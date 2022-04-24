import React from "react";
import { Helmet } from "react-helmet-async";
import './NotFound.css';

const NotFound = () => {
  return (
    <main>
      <Helmet>
        <title>404 - Your Doctor</title>
      </Helmet>
      <div className="containerCt not-found-img">
        <img
          src="https://i.ibb.co/RvvTFtw/400-Error-Bad-Request-pana.png"
          alt="Not-found"
        />
      </div>
    </main>
  );
};

export default NotFound;
