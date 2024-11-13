import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <ul className="nav-menu">
      <li className="nav-menu__container">
        <a href="index.html" className="nav-menu__link">
          <span>Posts list</span>
        </a>
      </li>
      <li className="nav-menu__container">
        <a href="addNewPost.html" className="nav-menu__link">
          <span>Add new post</span>
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
