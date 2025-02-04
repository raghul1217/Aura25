import React from "react";
import "../styles/clubs.css";
import { motion } from "framer-motion";
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
    link: "https://www.instagram.com/ethnic_tuners_?igsh=MTh6eWlidTlodTllaA==",
    description:
      '🎵 "Music washes away from the soul the dust of everyday life" – said Berthold Auerbach. 🎶 Indeed, the Music Club of our GCE Salem, referred to as Ethnic Tuners, 🎸 owns the credits for washing away the sadness, pain, and failures of our students, by emanating their club\'s 🎼 warmth and positivity through tunes of rhythms! ✨🎤🎧',
  },
  {
    name: "Dance Club",
    logo: dance,
    link: "https://www.instagram.com/sbz_crew_23?igsh=b2ppd3NnbWRhdGhp",
    description:
      "💃 Dancing is the best way to express yourself, without having to say a word. 🕺 The Dance Club of our GCE Salem, renowned as SBZ Crew, 🌟 produces little Michael Jacksons 🎭 and takes the bow 🎀 for letting all the beautiful souls out there realize their authentic charms 💖 and radiant personality through dancing! 🎶🔥",
  },
  {
    name: "English Club",
    logo: english,
    link: "https://www.instagram.com/english_club_gce?igsh=MXJrZmZjaHU5Ynhycw==",
    description:
      "📖 Literature is a mirror of the world 🌎 and it reflects the beauty of human nature. ✨ And hereby we have the English Literary Association of our GCE Salem, 🖋️ brimming with its little buddies 🧠 who always brew creativity 🎨 and excellence 🌟 and are ready to serve 'em to the world! 🏆📚✍️",
  },
  {
    name: "Tamil Club",
    logo: tamil,
    link: "https://www.instagram.com/thamizh_ilakkiya_mandram?igsh=MTgxYzluc2tnamhlcw==",
    description:
      "📝 தமிழ் இலக்கியம்‌ என்பது தமிழரின் வாழ்வின் அடையாளம். 🏛️ Speaking of, the Tamil Literary Association of our GCE Salem, 🏆 has paved the way for many, imprinting the rich cultural heritage 🎭, tradition 🏵️, and inspiration of Tamil amongst us. 📜🖋️🎶",
  },
  {
    name: "Arts Club",
    logo: arts,
    link: "https://www.instagram.com/arts_club_of_gce?igsh=dnhkd2FuanltNXRy",
    description:
      "🎨 Art is the only way to run away without leaving home. 🏡 Little Picassos 🖌️ arrived at GCE Salem and made a home. 🏠 The Arts Club never fails to embrace everyone 🤗, leading us to different worlds 🌍 through their impeccable paintings. 🖼️✨",
  },
  {
    name: "Film Club",
    logo: film,
    link: "https://www.instagram.com/gce_fmc?igsh=MWZ3OG9keXphcTlhOA==",
    description:
      "🎬 Movies are the most powerful empathy machine in all arts, 🎥 inspiring, educating 📚, and challenging assumptions. 🧠 Directors 🎭, writers ✍️, and cameramen 📷 of the Film Making Club at GCE Salem have always delivered heart-touching ❤️ films. 🎞️ The team never fell short! ⭐🎥🍿",
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
                <button
                  className="custom-btn13 btn-13"
                  onClick={() => window.open(club.link, "_blank")}
                >
                  <i className="fa-brands fa-instagram"></i>
                  <span className="follow-span">Follow</span>
                </button>
              </div>
            </div>
            <div className="cover">
              <img src={club.logo} alt={club.name} className="club-logo" />
              <p className="club-name">{club.name}</p>

              <div class="btn-conteiner">
                <a class="btn-content">
                  <span class="icon-arrow">
                    <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 66 43"
                      height="40px"
                      width="40px"
                    >
                      <g
                        fill-rule="evenodd"
                        fill="none"
                        stroke-width="1"
                        stroke="none"
                        id="arrow"
                      >
                        <path
                          fill="#9ee5fa"
                          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                          id="arrow-icon-one"
                        ></path>
                        <path
                          fill="#9ee5fa"
                          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                          id="arrow-icon-two"
                        ></path>
                        <path
                          fill="#9ee5fa"
                          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                          id="arrow-icon-three"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
