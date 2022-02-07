import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1 className='site-title'>Find Your Weather</h1>
      <div className='link'>
        <Link to='/' className='home'>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Header;
