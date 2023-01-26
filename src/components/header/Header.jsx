import { useAuthState, useAuthDispatch } from "../../context/Context";
import { logout } from "../../context/Actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import logoSvg from "../../assets/images/logo.svg";
import styles from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { SvgIcon } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();
  const { user } = authState;

  const handleLogOut = async () => {
    console.log(authState.user);
    await authDispatch(logout());
    navigate("/login");
  }

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
            <div className={styles.userContainer}>
              {user ? (
                <>
                  <p>{user.email}</p>
                  <button onClick={handleLogOut}>Sign Out</button>
                </>
              ) : (
                <>
                  <p>example@email.com</p>
                  <h5>
                    <Link to="/login">Login</Link>
                  </h5>
                </>
              )}
            </div>
          </li>
          <li>
            <div className={styles.userContainer}>
              <p>Returns</p>
              <h5>& Orders</h5>
            </div>
          </li>
          <li>
            <div className={styles.userContainer}>
              <p>Your</p>
              <h5>Prime</h5>
            </div>
          </li>
          <li className={styles.basketContainer}>
            <SvgIcon
              component={ShoppingBasketIcon}
              sx={{
                fill: "white",
                height: "2.5rem",
                width: "2.5rem",
                padding: ".25rem",
                border: "none",
                cursor: "pointer",
              }}
            />
            <p>0</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
