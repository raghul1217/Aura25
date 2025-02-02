import React from "react";
import "../styles/clubs.css";
import music from '../assets/musicclub.jpg'
import dance from '../assets/danceclub.jpg'
import film from '../assets/film.png'
import arts from '../assets/arts.png'
import tamil from '../assets/tamil.png'
import english from '../assets/english.png'

// Club data
const clubsData = [
  {
    name: "Music Club",
    logo: music,
    description: "🎵 \"Music washes away from the soul the dust of everyday life\" – said Berthold Auerbach. 🎶 Indeed, the Music Club of our GCE Salem, referred to as Ethnic Tuners, 🎸 owns the credits for washing away the sadness, pain, and failures of our students, by emanating their club's 🎼 warmth and positivity through tunes of rhythms! ✨🎤🎧"
  },
  {
    name: "Dance Club",
    logo: dance,
    description: "💃 Dancing is the best way to express yourself, without having to say a word. 🕺 The Dance Club of our GCE Salem, renowned as SBZ Crew, 🌟 produces little Michael Jacksons 🎭 and takes the bow 🎀 for letting all the beautiful souls out there realize their authentic charms 💖 and radiant personality through dancing! 🎶🔥"
  },
  {
    name: "English Club",
    logo: english,
    description: "📖 Literature is a mirror of the world 🌎 and it reflects the beauty of human nature. ✨ And hereby we have the English Literary Association of our GCE Salem, 🖋️ brimming with its little buddies 🧠 who always brew creativity 🎨 and excellence 🌟 and are ready to serve 'em to the world! 🏆📚✍️"
  },
  {
    name: "Tamil Club",
    logo: tamil,
    description: "📝 தமிழ் இலக்கியம்‌ என்பது தமிழரின் வாழ்வின் அடையாளம். 🏛️ Speaking of, the Tamil Literary Association of our GCE Salem, 🏆 has paved the way for many, imprinting the rich cultural heritage 🎭, tradition 🏵️, and inspiration of Tamil amongst us. 📜🖋️🎶"
  },
  {
    name: "Arts Club",
    logo: arts,
    description: "🎨 Art is the only way to run away without leaving home. 🏡 One day, little Picassos 🖌️ all over the city arrived in a dorm at GCE Salem, and made themselves a home. 🏠 Yeah, the Arts Club of our GCE Salem, never fails to embrace each and every one of us with open arms 🤗, thereby leading us to different worlds 🌍 through their impeccable paintings. 🖼️✨"
  },
  {
    name: "Film Club",
    logo: film,
    description: "🎬 Movies are the most powerful empathy machine in all the arts, 🎥 which also has the power to inspire, educate 📚, and challenge our assumptions. 🧠 In this way, the directors 🎭, screenplay writers ✍️, cameramen 📷, and many more talents of the Film Making Club of our GCE Salem have always succeeded in delivering heart-touching ❤️ and moving films. 🎞️ The team never fell short! ⭐🎥🍿"
  }
];


const Clubs = () => {
  return (
    <div id="clubs" className="clubs">
    <h1 className="clubs-head">The Clubs of Gce</h1>
      <div className="clubs-container">
        {clubsData.map((club, index) => (
          <div className="book" key={index}>
            <div className="content">
              <p>{club.description}</p>
            </div>
            <div className="cover">
              <img src={club.logo} alt={club.name} className="club-logo" />
              <p className="club-name">{club.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
