import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li className="nav-menu">
          <NavLink to="/home">Posts list</NavLink>
          <NavLink to="/new-post">Add new post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
