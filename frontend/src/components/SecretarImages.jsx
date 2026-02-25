import React from "react";
import Monesh from "../assets/Monesh.jpeg";
import Jeevitha from "../assets/Jeevitha.jpeg";
import Poovarasan from "../assets/Poovarasan.jpeg";
import Poojasri from "../assets/Poojasri.jpeg";
import "../styles/secretary.css";

const SecretarImages = () => {
  const secretaries = [
    { club: "Music", name: "Monesh S", photo: Monesh },
    { club: "Music", name: "Jeevitha P", photo: Jeevitha },
    { club: "Dance", name: "Poovarasan S", photo: Poovarasan },
    { club: "Dance", name: "Poojasri S", photo: Poojasri },
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
