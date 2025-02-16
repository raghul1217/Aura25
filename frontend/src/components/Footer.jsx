import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">


      
{/* <div class="parent">
    <div class="card">
        <div class="logo">
            <span class="circle circle1"></span>
            <span class="circle circle2"></span>
            <span class="circle circle3"></span>
            <span class="circle circle4"></span>
            <span class="circle circle5">
                <img src="" alt="logo" />
            </span>
        </div>
        <div class="glass"></div>
        <div class="content">
            <span class="title">UIVERSE (3D UI)</span>
            <span class="text">Create, share, and use beautiful custom elements made with CSS</span>
        </div>
        
    </div>
</div> */}




        {/* left Side: Contact Numbers and Icons */}
        <div className="left-side">
        <h4>Contact Us</h4>
          <div className="contact-numbers">
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>
                Gowtham Mugesh S
              </p>
              </div>
              <div className="align2">
              <p>: 8148015889</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Kasthuri J</p>
              </div>
              <div className="align2">
              <p>: 6379112737</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Saravanan Srikanth S M</p>
              </div>
              <div className="align2">
              <p>: 6381003112</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Poojashree S</p>
              </div>
              <div className="align2">
              <p>: 6379269913</p>
              </div>
            </div>
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Arpudha A K</p>
              </div>
              <div className="align2">
              <p>: 9952390749</p>
              </div>
            </div>
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Durai Arasan T</p>
              </div>
              <div className="align2">
              <p>: 9025051418</p>
              </div>
            </div>
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Gokulakrishnan R</p>
              </div>
              <div className="align2">
              <p>: 9363184485</p>
              </div>
            </div>
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Manikandan P</p>
              </div>
              <div className="align2">
              <p>: 7825938625</p>
              </div>
            </div>

          </div>

          <div className="social-icons">
            <div className="social-icons-div">
            <a href="https://www.instagram.com/aura_gce?igsh=bTlyMGVmbmtpN2V2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            </div>
            <div className="social-icons-div">
            <a href="https://youtube.com/@aura_gce_salem?si=fymAndEdjWg0nFJ1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            </div>
            <div className="social-icons-div">
            <a href="mailto:auragcesalem@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            </div>
          </div>
        </div>

        {/* Center: Quick Links Section */}
        <div className="center-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a to="#home">Home</a></li>
            <li><a href="#clubs" >Clubs</a></li>
            <li><a href="#events" >Events</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSe2pJ-8mqd92tvxI4Dv_883YsJ38sFp7gvHqko7W4XMFmJUzg/viewform" target='_blank'>Register</a></li>
            <li><a href="https://drive.google.com/drive/folders/10rg6bsXhj8f7FAUODSHTb_Nil_ho9SYz" target='_blank'>Rulebook</a></li>
          </ul>
        </div>


        {/* right side */}
        <div className="right-side">
          <div className="contact-image-container">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> {/* Location Icon */}
              Padmashree Muthaiyan Auditorium, Government College of Engineering, Karuppur, Salem - 636011
            </p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62509.28753462909!2d78.10412419650879!3d11.706416889358225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfa3400000001%3A0x786937287cc3f1eb!2sGovernment%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1729430777919!5m2!1sen!2sin"
              width="400"
              height="200"
              // style={{ border: '0' }}
              className='footer-gmap'
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="footer-bottom">
        <hr />
        <p className='footer-p'>Designed & Developed by <a href="https://renderspark.vercel.app/" target="_blank" rel="noopener noreferrer">Renderspark.</a></p>

      </div>
    </footer>
  );
};

export default Footer;
