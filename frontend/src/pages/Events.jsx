import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/eventcard.css';

const Events = () => {

  useEffect(() => {

    ScrollReveal().reveal('.main-heading, .event-type-heading', {
      origin: 'top',
      distance: '20px',
      duration: 600,
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.parent', {
      origin: 'bottom',
      distance: '40px',
      duration: 700,
      easing: 'ease-in-out',
      reset: true
    });
  }, []);

  const eventsData = [
    {
      category: "Single Events",
      events: [
        { title: "Event 1", content: "Description 1", logo: "logo1.png" },
        { title: "Event 2", content: "Description 2", logo: "logo2.png" },
        { title: "Event 3", content: "Description 3", logo: "logo3.png" },
        { title: "Event 4", content: "Description 4", logo: "logo4.png" },
        { title: "Event 5", content: "Description 5", logo: "logo5.png" },
        { title: "Event 6", content: "Description 6", logo: "logo6.png" }
      ]
    },
    {
      category: "Duo Events",
      events: [
        { title: "Event 7", content: "Description 7", logo: "logo7.png" },
        { title: "Event 8", content: "Description 8", logo: "logo8.png" },
        { title: "Event 9", content: "Description 9", logo: "logo9.png" },
        { title: "Event 10", content: "Description 10", logo: "logo10.png" },
        { title: "Event 11", content: "Description 11", logo: "logo11.png" },
        { title: "Event 12", content: "Description 12", logo: "logo12.png" }
      ]
    },
    {
      category: "Group Events",
      events: [
        { title: "Event 13", content: "Description 13", logo: "logo13.png" },
        { title: "Event 14", content: "Description 14", logo: "logo14.png" },
        { title: "Event 15", content: "Description 15", logo: "logo15.png" },
        { title: "Event 16", content: "Description 16", logo: "logo16.png" },
        { title: "Event 17", content: "Description 17", logo: "logo17.png" },
        { title: "Event 18", content: "Description 18", logo: "logo18.png" }
      ]
    }
  ];

  return (
    <div className="events-container" id='events'>
      <div className="parent">
      {eventsData.map((categoryData, index) => (
        <div key={index} className='event-cont'>
          <h2>{categoryData.category}</h2>
          <div className="events-container">
            {categoryData.events.map((event, idx) => (
              <div className="card" key={idx}>
                <div className="content-box">
                  <span className="card-title">{event.title}</span>
                  <p className="card-content">{event.content}</p>
                  <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                  <img src={event.logo} alt="Event Logo" className="event-logo" />
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
