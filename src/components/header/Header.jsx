import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useLogout } from "../../hooks/useLogout";

import logo from "../../assets/images/logo.png";
import logoSvg from "../../assets/images/logo.svg";
import styles from "./header.module.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { SvgIcon } from "@mui/material";
import useShop from "../../context/ShopContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();

  const { products } = useShop();

  const searchInput = useRef(null);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchInput.current.value}`);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <Link to="/" className={styles.logoContainer}>
            <img src={logoSvg} alt="logoImg" className={styles.logoImg} />
            <img src={logo} alt="logoTxt" className={styles.logoTxt} />
          </Link>
          <li className={styles.searchBarContainer}>
            <input
              type="search"
              name="searchBar"
              className={styles.SearchBar}
              ref={searchInput}
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
              onClick={handleSearch}
            />
          </li>
          <li>
            <div className={styles.userContainer}>
              {user ? (
                <>
                  <p>{user.email}</p>
                  <button onClick={logout} className={styles.signButton}>
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <p>example@email.com</p>
                  <h5>
                    <Link to="/login" className={styles.signButton}>
                      Login
                    </Link>
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
            <Link to="/cart">
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
            </Link>
            <p>{products.length}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
