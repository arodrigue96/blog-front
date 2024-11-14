import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink to="/home">Posts list</NavLink>
        </li>
        <li>
          <NavLink to="/new-post">Add new post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
