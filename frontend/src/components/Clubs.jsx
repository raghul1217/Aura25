import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/clubs.css";
import music from "../assets/musicclub.jpg";
import dance from "../assets/danceclub.jpg";
import film from "../assets/film.png";
import arts from "../assets/arts.png";
import tamil from "../assets/tamil.png";
import english from "../assets/english.png";

// Club data
const clubsData = [
  {
    name: "Music Club",
    logo: music,
    description:
      '🎵 "Music washes away from the soul the dust of everyday life" – said Berthold Auerbach. 🎶 The Music Club of GCE Salem, Ethnic Tuners, 🎸 spreads warmth and positivity through music! ✨🎤🎧',
  },
  {
    name: "Dance Club",
    logo: dance,
    description:
      "💃 Dancing expresses without words. 🕺 SBZ Crew of GCE Salem produces little Michael Jacksons 🎭 and lets everyone shine! 🎶🔥",
  },
  {
    name: "English Club",
    logo: english,
    description:
      "📖 Literature mirrors the world 🌎. The English Literary Association fosters creativity 🖋️, excellence 🌟, and brilliance. 🏆📚✍️",
  },
  {
    name: "Tamil Club",
    logo: tamil,
    description:
      "📝 தமிழ் இலக்கியம் தமிழரின் அடையாளம். 🏛️ The Tamil Literary Association preserves rich culture 🎭 and tradition. 📜🖋️🎶",
  },
  {
    name: "Arts Club",
    logo: arts,
    description:
      "🎨 Art is an escape. 🏡 Little Picassos 🖌️ at GCE Salem create stunning masterpieces. 🖼️✨",
  },
  {
    name: "Film Club",
    logo: film,
    description:
      "🎬 Movies inspire and challenge. 🎥 The Film Making Club crafts heart-touching ❤️ films. 🎞️⭐🍿",
  },
];

const Clubs = () => {
  return (
    <div id="clubs" className="clubs">
      
      <h1 className="clubs-head">The Clubs of GCE</h1>
      <div className="clubs-container">
        {clubsData.map((club, index) => (
          <motion.div
            className="book"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3 }} // Triggers animation when 30% of the element is in view
            exit={{ opacity: 0, scale: 0.8 }} // Makes it disappear when scrolled away
          >
            <div className="content">
              <p>{club.description}</p>
              <div className="clubs-btn-div">
                <button className="custom-btn13 btn-13">
                  <i className="fa-brands fa-instagram"></i>
                  <span className="follow-span">Follow</span>
                </button>
              </div>
            </div>
            <div className="cover">
              <img src={club.logo} alt={club.name} className="club-logo" />
              <p className="club-name">{club.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
