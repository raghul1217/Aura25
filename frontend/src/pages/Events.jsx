import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../styles/eventcard.css";
import music from "../assets/musicclub.jpg";
import dance from "../assets/danceclub.jpg";
import film from "../assets/filmclub.jpg";
import arts from "../assets/artsclub.jpg";
import tamil from "../assets/tamil.png";
import english from "../assets/english1.jpg";

const Events = () => {
  const eventsData = [
    {
      category: "Solo Events",
      events: [
        {
          title: "Vocal Vibes",
          content:
            "Solo performer showcasing vocal skills, expression, and stage presence, conveying emotions through their unique voice.",
          logo: music,
        },
        {
          title: "One Beat",
          content:
            "Single dancer showcasing skill, expression, and creativity, highlighting technique and storytelling.",
          logo: dance,
        },
        {
          title: "Resonix",
          content:
            "Solo instrumental performance showcasing musical talent, rhythm, and creativity.",
          logo: music,
        },
        {
          title: "Spill Art",
          content:
            "Artists creating unique designs by pouring and manipulating colors on canvas.",
          logo: arts,
        },
        {
          title: "Pencil Sketch",
          content:
            "Artists creating lively black and white pictures using graphite pencils.",
          logo: arts,
        },
        {
          title: "தேன்கவி",
          content:
            "சொற்களால் சித்திரம் வரைந்து, சிந்தையை வருடும் கவிதைகள் புனையும் நிகழ்வு.",
          logo: tamil,
          class: "tamiltext",
        },
        {
          title: "சொற்சிலம்பம்",
          content:
            "அறிவு ஆயுதம் கொண்டு, தலைப்பிலிருந்து விலகாமல் வாய்மொழியும் கருத்துகளில் கேட்பவர்கள் நெஞ்சை வசப்படுத்தும் போட்டி",
          logo: tamil,
          class: "tamiltext",
        },
        {
          title: "Paper Craft",
          content:
            "Creating artistic designs and structures using paper and minimal materials.",
          logo: arts,
        },
        {
          title: "Word Waves",
          content:
            "Participants writing poems inspired by given pictures, showcasing creativity and emotional expression.",
          logo: english,
        },
        {
          title: "Monologue",
          content:
            "Solo performer delivering a character's emotions, thoughts, or story, showcasing acting skills and expression.",
          logo: film,
        },
        {
          title: "Verse Craft",
          content:
            "Crafting verses with creativity and emotion, showcasing poetic skills.",
          logo: english,
        },
      ],
    },
    {
      category: "Duo Events",
      events: [
        {
          title: "Melo Duet",
          content:
            "Two singers performing together, showcasing coordination, vocal blending, and emotional expression.",
          logo: music,
        },
        {
          title: "தமிழ்க்களம்",
          content:
            "தமிழனின் வரலாறு, இலக்கணம், இலக்கியம், பண்பாடு, கலாச்சாரம் என்று நம் பெருமைகளை நினைவு கூர்ந்து விடையளிக்கும் போட்டி.",
          logo: tamil,
          class: "tamiltext",
        },
        {
          title: "Dynamic Duo",
          content:
            "Two dancers performing together, highlighting coordination, chemistry, and synchronization.",
          logo: dance,
        },
      ],
    },
    {
      category: "Group Events",
      events: [
        {
          title: "Harmonyx",
          content:
            "Musical gathering featuring choirs, bands, or groups singing in harmony, fostering teamwork and creativity.",
          logo: music,
        },
        {
          title: "Synchronix",
          content:
            "Coordinated dance performance featuring multiple dancers, showcasing teamwork, rhythm, and creativity.",
          logo: dance,
        },
        {
          title: "Scene Recreation",
          content:
            "Teams recreating iconic movie scenes, capturing emotions, cinematography, and essence.",
          logo: film,
        },
        {
          title: "Short Film",
          content:
            "Creators producing impactful, engaging short films showcasing storytelling and visuals.",
          logo: film,
        },
      ],
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "40px",
      duration: 1000,
      delay: 300,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
      beforeReveal: (el) => {
        el.style.transform = "none"; 
      },
    });

    sr.reveal(".card-wrap", { interval: 250 });

    return () => sr.destroy(); 
  }, []);

  return (
    <div className="events-container" id="events">
      <div className="parent">
        {eventsData.map((categoryData, index) => (
          <div key={index} className="event-cont">
            <h2 className="events-head">{categoryData.category}</h2>
            <div className="events-container">
              {categoryData.events.map((event, idx) => (
                <div className="card-wrap" key={idx}>
                  <div className="card">
                    <div className="logo">
                      <span className="circle circle1"></span>
                      <span className="circle circle2"></span>
                      <span className="circle circle3"></span>
                      <span className="circle circle4"></span>
                      <span className="circle circle5">
                        <img
                          className="events-logo"
                          src={event.logo}
                          alt="Event Logo"
                        />
                      </span>
                    </div>
                    <div className="glass"></div>
                    <div className="content-event">
                      <span className="title">{event.title}</span>
                      <span className={`${event.class} text `}>
                        {event.content}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
