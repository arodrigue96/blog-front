import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <ul className="nav-menu">
      <li className="nav-menu__container">
        <NavLink to="/home">
          <span>Posts list</span>
        </NavLink>
      </li>
      <li className="nav-menu__container">
        <NavLink to="/new-post">
          <span>Add new post</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
