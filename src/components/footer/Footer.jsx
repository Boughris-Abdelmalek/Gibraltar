import { SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useNavigate } from "react-router-dom";

import styles from "./footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  const iconStyles = {
    height: "5rem",
    width: "5rem",
    padding: ".25rem",
    border: "none",
    cursor: "pointer",
  };

  const githubLink = "https://github.com/Boughris-Abdelmalek";
  const linkedinLink = "https://www.linkedin.com/in/abdelmalek-boughris/";

  const handleRedirect = (link) => {
    window.location.href = link;
  };

  return (
    <footer>
      <div className={styles.container}>
        <p>
          © 2023 Malik. All rights reserved. If you use your real credit card to
          buy an item, I will personally take your money (just kidding, please
          don't sue me).
        </p>
        <ul>
          <li>
            <SvgIcon
              component={GitHubIcon}
              sx={iconStyles}
              onClick={() => handleRedirect(githubLink)}
            />
          </li>
          <li>
            <SvgIcon
              component={LinkedInIcon}
              sx={iconStyles}
              onClick={() => handleRedirect(linkedinLink)}
            />
          </li>
        </ul>
        <p>
          Thanks for shopping with us, and remember to always read the reviews
          before making a purchase!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
