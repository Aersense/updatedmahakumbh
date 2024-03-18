import logo from "../images/logo.png";
import plus from "../images/plus.png";
import React from 'react';
import { Link } from 'react-router-dom';
 
const ExpandedContainer = ({ hideExpandedContainer }) => {
  return (
    <div className="expanded-container">
      <Link style={{color:"rgba(187, 187, 187, 0.79)",textDecoration:"none",marginTop:"8px"}} to='/' onClick={hideExpandedContainer}>Home</Link>
      <Link style={{color:"rgba(187, 187, 187, 0.79)",textDecoration:"none",marginTop:"8px"}} to="/aboutus" onClick={hideExpandedContainer}>About Us</Link>
      <Link style={{color:"rgba(187, 187, 187, 0.79)",textDecoration:"none",marginTop:"8px"}} to="/support" onClick={hideExpandedContainer}>Support</Link>
    </div>
  );
};

const NevBar = () => {
  const [isRotated, setIsRotated] = React.useState(false);

  const hideExpandedContainer = () => {
    setIsRotated(false);
  };

  return (
    <div className={`nevMain ${isRotated ? 'expanded' : ''}`}>
      <div className='logo'>
        <div style={{ marginLeft: "48px" }}>
          <img style={{ width: "42px" }} src={logo} alt="" />
        </div>
        <div style={{ marginLeft: "11px" }}>AERSENSE</div>
      </div>
      <div className='Nbar'>
        <Link style={{color:"rgba(187, 187, 187, 0.79)",textDecoration:"none"}} to='/' onClick={hideExpandedContainer}>Home</Link>
        <Link style={{color:"rgba(187, 187, 187, 0.79)",textDecoration:"none"}} to="/aboutus" onClick={hideExpandedContainer}>About Us</Link>
        <Link style={{color:"rgba(187, 187, 187, 0.79)",textDecoration:"none"}} to="/support" onClick={hideExpandedContainer}>Support</Link>
      </div>
      <div className='mobD'>
        <img
          onClick={() => {
            setIsRotated(!isRotated);
          }}
          src={plus}
          alt=""
          style={{ transform: isRotated ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.4s ease' }}
        />
      </div>
      {isRotated && <ExpandedContainer hideExpandedContainer={hideExpandedContainer} />}
    </div>
  );
};

export default NevBar;

