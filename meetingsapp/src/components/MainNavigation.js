import { NavLink } from "react-router-dom";
import LogoLion from "../assets/LogoLion.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img alt="logoLion" src="https://lionintel.com/img/logo_lion.svg"></img>
        <p>Lion Solutions</p>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/homePage"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/meeting"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Meeting
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/newMeeting"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Add a Meeting
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
