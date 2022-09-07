import { NavLink } from "react-router-dom";
import LogoLion from "../assets/LogoLion.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img alt="logoLion" src={LogoLion}></img>
        <p>Lion Solutions</p>
      </div>
      <nav className={classes.nav}>
        <ul>
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
              to="/quotes"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Meetings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
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
