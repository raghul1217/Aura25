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
          title: "பேச்சுப்போட்டி",
          content:
            "அறிவு ஆயுதம் கொண்டு, தலைப்பிலிருந்து விலகாமல் வாய்மொழியும் கருத்துகளில் கேட்பவர்கள் நெஞ்சை வசப்படுத்தும் போட்டி",
          logo: tamil,
          class: "tamiltext",
        },
        {
          title: "Poem Writing",
          content:
            "Participants writing poems inspired by given pictures, showcasing creativity and emotional expression.",
          logo: english,
        },
        {
          title: "Monologue",
          content:
            "Solo performer delivering a character's emotions, thoughts, or story, showcasing acting skills and expression.",
          logo: film,
        },
        {
          title: "Pencil Sketching",
          content:
            "Artists creating lively black and white pictures using graphite pencils.",
          logo: arts,
        },
      ],
    },
    {
      category: "Duo Events",
      events: [
        {
          title: "Meloduet",
          content:
            "Two singers performing together, showcasing coordination, vocal blending, and emotional expression.",
          logo: music,
        },
        {
          title: "Dynamic Duo",
          content:
            "Two dancers performing together, highlighting coordination, chemistry, and synchronization.",
          logo: dance,
        },
        {
          title: "தமிழ் வினாடி வினா",
          content:
            "தமிழனின் வரலாறு, இலக்கணம், இலக்கியம், பண்பாடு, கலாச்சாரம் என்று நம் பெருமைகளை நினைவு கூர்ந்து விடையளிக்கும் போட்டி.",
          logo: tamil,
          class: "tamiltext",
        },
        {
          title: "English Quiz",
          content:
            " Competitors testing linguistic skills and knowledge, showcasing expertise and speed.",
          logo: english,
        },
        {
          title: "Face Painting",
          content:
            "Artists creating temporary, vibrant designs on participants' hands or faces.",
          logo: arts,
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
          title: "வீதி நாடகம்",
          content:
            "நாட்டுக்குத் தேவையான நற்கருத்துகள், எளிய நடையிலும் உண்மையான பாடல்களிலும் நவரசம் கலந்த வீதி நாடகம்.",
          logo: tamil,
          class: "tamiltext",
        },
        {
          title: "வில்லுப்பாட்டு",
          content:
            "கேளாத செவிகளையும் கேட்க வைத்து, வர்ண மெட்டுகளில் நம் மனதை வருடும் தேனிசை வில்லுப்பாட்டு.",
          logo: tamil,
          class: "tamiltext",
        },
        {
          title: "Short Film",
          content:
            "Creators producing impactful, engaging short films showcasing storytelling and visuals.",
          logo: film,
        },
        {
          title: "Scene Recreation",
          content:
            "Teams recreating iconic movie scenes, capturing emotions, cinematography, and essence.",
          logo: film,
        },
        {
          title: "Adzap",
          content:
            "Teams creating and acting out imaginative ads, testing creativity, teamwork, and quick thinking.",
          logo: english,
        },
        {
          title: "Paper Dressing",
          content:
            "Teams designing and creating stylish outfits using paper and minimal materials.",
          logo: arts,
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
