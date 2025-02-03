import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/eventcard.css';
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
        { title: "Vocal Vibes", content: "Description 1", logo: music },
        { title: "One Beat", content: "Description 2", logo: dance },
        { title: "Tamil Speech", content: "Description 3", logo: tamil },
        { title: "Poem Writing", content: "Description 4", logo: english },
        { title: "Monologue", content: "Description 5", logo: film },
        { title: "Pencil Sketching", content: "Description 6", logo: arts }
      ]
    },
    {
      category: "Duo Events",
      events: [
        { title: "Meloduet", content: "Description 7", logo: music },
        { title: "Dynamic Duo", content: "Description 8", logo: dance },
        { title: "Tamil Quiz", content: "Description 9", logo: tamil },
        { title: "English Quiz", content: "Description 10", logo: english },
        { title: "Face Painting", content: "Description 11", logo: arts },
      ]
    },
    {
      category: "Group Events",
      events: [
        { title: "Harmonyx", content: "Harmonyx is a musical gathering where singers perform together, fostering teamwork, creativity, and enjoyment through diverse genres in harmonious collaboration.", logo: music},
        { title: "Synchronix", content: "Description 14", logo: dance },
        { title: "Veedhi Nadagam", content: "Description 15", logo: tamil },
        { title: "Villupaatu", content: "Description 16", logo: tamil },
        { title: "Short Film", content: "Description 17", logo: film},
        { title: "Scene Recreation", content: "Description 18", logo: film },
        { title: "Adzap", content: "Description 18", logo: english },
        { title: "Paper Dressing", content: "Description 18", logo: arts }
      ]
    }
  ];

  return (
    <div className="events-container" id='events'>
      <div className="parent">
        {eventsData.map((categoryData, index) => (
          <div key={index} className='event-cont'>
            <h2 className='events-head'>{categoryData.category}</h2>
            <div className="events-container">
              {categoryData.events.map((event, idx) => (
                <div className="card" key={idx}>
                  <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                      <img className='events-logo' src={event.logo} alt="Event Logo" />
                    </span>
                  </div>
                  <div className="glass"></div>
                  <div className="content-event">
                    <span className="title">{event.title}</span>
                    <span className="text">{event.content}</span>
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
