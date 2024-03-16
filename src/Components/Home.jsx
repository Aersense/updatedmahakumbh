import React,{useState} from 'react'
import vide from "../images/webfinal.mp4"
import s from "../images/s.png";
import l from "../images/l.png";
import i from "../images/i.png";
import x from "../images/x.png";
import vid from "../images/vid.png";
import '../App.css'
const Home = () => {

    const ExpandedContainer = ({ isVisible }) => {
        return (
          <div className={`expanded-container ${isVisible ? 'visible' : ''}`}>
              <div class="form-container">
    <h2>Join The Wating List</h2>
    <form method="POST" action='https://getform.io/f/pbovxjma'>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required /> 
      </div>
      <div class="form-group">
        <label for="contact">Contact Number:</label>
        <input type="tel" id="contact" name="contact" placeholder="Enter your contact number" required />
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" placeholder="Enter your age" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label >
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <button className='fombtn' type="submit">Submit</button>
    </form>
  </div>
          </div>
        );
      };
      

    const [isRotated, setIsRotated] = useState(false);

  return (
        <div className="home">
        <video className="home_backgroundVideo" 
                src={vide} 
                muted 
                loop 
                playsInline 
                autoPlay       
        ></video> 

        <div className='headFilm'>
        <h3>Watch the film</h3>
        <a href="https://www.youtube.com/watch?v=WujP0DXTXw8"><img src={vid} alt="Aersense Youtube Channel"/></a>
        </div>
        <div className='vidcont'>
            <h1 style={{color:"white",fontSize:"55px"}}>AERSENSE</h1>
            <h3 style={{color:"white",fontSize:"22px",marginTop:"11px"}}>Starting at $36</h3>
            <br /><div>Join the WaitListPro by March 31st to receive the first 3</div>
            <div>months of the AERSENSE Subscription for free.</div>
            <br /> <br /> <br />
            <div className="btn">
            <button
            className='homebtn'
            id='lernbtn'
            style={{backgroundColor:"rgb(0, 255, 224)",color:"black",border:"none"}}
            onClick={() => {
                setIsRotated(!isRotated);
            }}
            >
            WaitListPro
            </button> 
            {isRotated && <ExpandedContainer isVisible={isRotated} />}

            <button className='homebtn' id='lernbtn'>Learn more </button>
            </div>
        </div> <br />
        <div className='cont'>
            <div className='cont2'>
                <p> AerSense is a pioneering technology enterprise dedicated to transforming air quality, respiratory well-being, connectivity and AI integration through innovative wearable devices. 
                    AerSense's mission is to develop advanced wearable technology that enhance air quality, provide health insights, and elevate daily living experiences.</p>
            </div>
            <div className="cont3">
            {/* <h1>Stay connected and informed</h1>
            <h1>about the latest from Humane.</h1> */}
            </div>
            {/* <button>Sign up for updates</button> */}
            <div className='cont4'>
                <div className="cont41">
                {/* <div>support</div>
                <div>join us</div>
                <div>media kit</div>
                <div>subscription</div>
                <div>warranty</div>
                <div>return policy</div>
                <div>privacy policy</div>
                <div>terms of service</div> */}
                </div>
                <div className="cont42">
                <a href="https://twitter.com/AersenseInc" target="blank"><img src={x} alt="twitter" /></a>
                <a href="https://www.linkedin.com/company/aersense/" target="blank"><img src={l} alt="linkdin" /></a>
                <a href="https://bit.ly/aersenseInstaUrl" target="blank"><img src={i} alt="instagram" /></a>
                 <a href="https://discord.gg/DGpCBdDf" target="blank"><img src={s} alt="discord" /></a>
                    <div className='footer1'>© Aersense. 2024 All rights reserved.</div>
                </div>
                <div className='footer'>
                    <p>© Aersense. 2024 All rights reserved.</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Home
