import React, { useEffect, useState } from "react";
import axios from "axios";
import aura from "../assets/Auralogo.png";
import "../styles/home.css";
import Events from "./Events";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaTimes } from "react-icons/fa";
import Clubs from "../components/Clubs";
import ImageCarousel from "../components/ImageCarousel";
const Home = () => {
  const [number, setNumber] = useState(20);
  const [showNotification, setShowNotification] = useState(false);
  const [userName, setUserName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    // Countdown timer to March 13, 2026 12:00 PM
    const targetDate = new Date("March 13, 2026 12:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, []);

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
          header,
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/rulebook.pdf"; // Ensure the correct path to your PDF
    link.download = "Rulebook.pdf"; // This sets the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="home-bg" id="home">
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

            <div className="home-container">
              <div className="home-content1">
                {/* <img src={aura} alt="progeni25-logo" /> */}
                {/* <h1 className='brand-main'>Progen'i <span className='number'>{number}.0</span></h1> */}
                <h1 id="home-head">Aura'26</h1>
                <p>
                  From the legacy of <span>"AURA '25"</span> to a grander,
                  louder, and more vibrant <span>"AURA '26"</span>, we return
                  with unstoppable energy, creativity, and campus spirit. Get
                  ready to experience culture, talent, and passion like never
                  before
                </p>
                {/* <div className="home-date-container">
                  <h3 className="home-date s-home-date">A multi-day intercollege cultural fest celebrating music, dance, arts, literature, and creativity.
Two days. Infinite memories 💃🎤</h3>
                  <h3 className="home-date">March - 14 & 15 - 2026</h3>
                </div> */}
                <div className="countdown-container">
                  <h3 className="countdown-title">March - 14 & 15 - 2026</h3>
                  <div className="countdown-timer">
                    <div className="countdown-item">
                      <span className="countdown-value">{timeLeft.days}</span>
                      <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                      <span className="countdown-value">{timeLeft.hours}</span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                      <span className="countdown-value">
                        {timeLeft.minutes}
                      </span>
                      <span className="countdown-label">Minutes</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                      <span className="countdown-value">
                        {timeLeft.seconds}
                      </span>
                      <span className="countdown-label">Seconds</span>
                    </div>
                  </div>
                </div>
                <div className="home-btn">
                  <a
                    to="/register"
                    id="neon-btn"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe2pJ-8mqd92tvxI4Dv_883YsJ38sFp7gvHqko7W4XMFmJUzg/viewform"
                    target="_blank"
                  >
                    <button className="register-btn">Register</button>
                  </a>
                  <p>Registration closes on 10th March 2026</p>
                  <p>
                    A multi-day intercollege cultural fest celebrating music,
                    dance, arts, literature, and creativity. Two days. Infinite
                    memories 💃🎤
                  </p>
                </div>
              </div>
              <div className="home-content2">
                <img src={aura} alt="" />
              </div>
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
      <ImageCarousel />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
