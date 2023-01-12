import logo from "../../assets/logo.png";
import logoSvg from "../../assets/logo.svg";
import styles from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { SvgIcon } from "@mui/material";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.logoContainer}>
            <img src={logoSvg} alt="logoImg" className={styles.logoImg} />
            <img src={logo} alt="logoTxt" className={styles.logoTxt} />
          </li>
          <li className={styles.searchBarContainer}>
            <input
              type="search"
              name="searchBar"
              className={styles.SearchBar}
            />
            <SvgIcon
              component={SearchIcon}
              sx={{
                backgroundColor: "#febd69",
                height: "2rem",
                width: "2rem",
                padding: ".25rem",
                border: "none",
                cursor: "pointer",
              }}
            />
          </li>
          <li>
            <div className={styles.AuthUser}>
                <p>Hello boughris@outlook.fr</p>
                <h5>Sign Out</h5>
            </div>
          </li>
          <li>Orders</li>
          <li>Prime</li>
          <li>Basket</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
