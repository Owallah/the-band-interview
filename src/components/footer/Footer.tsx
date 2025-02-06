import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h1 className="footer_title">Owallah</h1>
        <ul className="footer_list">
          <li>
            <a href="#" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="footer_link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="footer_link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="footer_link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer_socials">
          <a
            href="https://x.com/ElkinTradingKe"
            className="footer_social_icon"
            target="_blank"
          >
            <Twitter />
          </a>

          <a
            href="https://github.com/Owallah"
            className="footer_social_icon"
            target="_blank"
          >
            <GitHub />
          </a>

          <a
            href="https://www.instagram.com/the.nazarite.1/"
            className="footer_social_icon"
            target="_blank"
          >
            <Instagram />
          </a>

          <a
            href="https://wa.me/+254702896093"
            className="footer_social_icon"
            target="_blank"
          >
            <WhatsApp />
          </a>

          <a
            href="https://www.linkedin.com/in/michael-johnson-8a6a08176/"
            className="footer_social_icon"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </div>
        <span className="footer_copyright">
            &#169; Michael Johnson Owallah. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
