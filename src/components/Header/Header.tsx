import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-container__title">
          <img
            className="logo"
            src="/logo.svg"
            alt="Blog logo"
            width={80}
            height={80}
          />
          <h1 className="main-title">Aniol's Backoffice Blog</h1>
        </div>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
