import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink to="/home">Posts list</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
