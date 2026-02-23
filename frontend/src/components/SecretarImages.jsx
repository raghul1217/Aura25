import React from "react";
import dummy from "../assets/dummy.jpeg";
import "../styles/secretary.css";

const SecretarImages = () => {
  const secretaries = [
    { club: "Music", name: "Monesh S", photo: dummy },
    { club: "Music", name: "Jeevitha P", photo: dummy },
    { club: "Dance", name: "Poovarasan S", photo: dummy },
    { club: "Dance", name: "Poojasri S", photo: dummy },
  ];

  return (
    <div className="secretary-section" id="secretaries">
      <div className="memorable-moments">
        <h2 className="events-head" id="secretaries-heading">
          Club Secretaries
        </h2>
      </div>
      <div className="secretary-container">
        {secretaries.map((member, index) => (
          <div key={index} className="secretary-card">
            <div className="secretary-photo-frame">
              <img
                src={member.photo}
                alt={member.name}
                className="secretary-photo"
              />
            </div>
            <p className="secretary-name">{member.name}</p>
            <span className="secretary-club-label">{member.club}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecretarImages;
