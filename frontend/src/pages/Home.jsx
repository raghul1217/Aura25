import React, { useEffect, useState } from "react";
import axios from "axios";
import logo2 from "../assets/logo2.png";
import aura from "../assets/Auralogo.png";
import { Link } from "react-router-dom";
import pilot from "../assets/pilot.svg";
import "../styles/home.css";
import Events from "./Events";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Parallax from "../components/Parallax";
import { FaTimes } from "react-icons/fa";
import Clubs from "../components/Clubs";

const Home = () => {
  const [number, setNumber] = useState(20);
  const [showNotification, setShowNotification] = useState(false);
  const [userName, setUserName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(true);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    // Fetch user data to check payment status
    const fetchUserData = async () => {
      try {
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/profile`,
          {},
          header
        );
        const { name, paymentStatus } = res.data.data;
        setUserName(name);
        setPaymentStatus(paymentStatus);
        if (!paymentStatus) {
          setShowNotification(true); // Show notification if payment is incomplete
        }
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    let currentNumber = 1;
    const intervalId = setInterval(() => {
      // Update the number from 20 to 25
      if (currentNumber < 25) {
        currentNumber++;
      } else {
        currentNumber = 25; // Fix it at 25 once the loop completes
        clearInterval(intervalId); // Stop the interval once it hits 25
      }
      setNumber(currentNumber);
    }, 100); // Fast transition

    return () => clearInterval(intervalId); // Clean up the interval when component unmounts
  }, []);

  // Function to close the notification
  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <div className="home-bg">
        <Header />
        <section id="rotating-section1">
          <div id="rotating-animation">
            <div>
              {[
                "fa-music",
                "fa-headphones",
                "fa-microphone",
                "fa-drum",
                "fa-guitar",
                "fa-music",
                "fa-play",
                "fa-headphones",
                "fa-microphone",
                "fa-dance",
                "fa-volume-up",
                "fa-podcast",
                "fa-record-vinyl",
                "fa-headset",
                "fa-wave-square",
                "fa-music",
                "fa-guitar",
                "fa-drum",
                "fa-play-circle",
                "fa-microphone-alt",
              ].map((icon, index) => (
                <i
                  key={index}
                  className={`fa-solid ${icon} icon1 icon${index + 1}`}
                ></i>
              ))}
            </div>
          </div>
          <div className="home-container">
            <div className="home-content1">
              {/* <img src={aura} alt="progeni25-logo" /> */}
              {/* <h1 className='brand-main'>Progen'i <span className='number'>{number}.0</span></h1> */}
              <h1 id="home-head">Aura'25</h1>
              <div className="home-date-container">
                <h3 className="home-date s-home-date">Slated to happen on</h3>
                <h3 className="home-date">March-01 2025</h3>
              </div>
              <p>
                “AURA '25”, the most awaited intercollegiate fest conducted by
                'Government College of Engineering, Salem', coordinated by the
                exuberant clubs of ours is here reflecting it's aura like a
                magnetic field attracting all the energetic crowds with lively
                performances. Buckle up for an overall atmosphere of joy and
                celebration!!
              </p>
              <div className="home-btn">
                <Link to="/register" id="neon-btn">
                  <button className="register-btn">REGISTER</button>
                </Link>
                <p>Event access per head - ₹250/-</p>
              </div>
            </div>
            <div className="home-content2">
              <img src={aura} alt="" />
            </div>
          </div>
        </section>
      </div>

      {/* Conditionally render the notification message */}
      {showNotification && (
        <div className="notification-container">
          <div className="notification">
            <button
              className="notification-close-btn"
              onClick={handleCloseNotification}
            >
              <FaTimes />
            </button>
            <p>
              Hello {userName}, your payment is drifting in space. Complete it
              in your profile.
            </p>
            <Link to="/profile" className="profile-link">
              Go to Profile
            </Link>
          </div>
        </div>
      )}
      <Clubs />
      <Events />

      <Footer />
    </>
  );
};

export default Home;
