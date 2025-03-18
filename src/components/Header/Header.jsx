import { Link } from "react-router-dom";
import "./Header.scss";
import lkt from "../../assets/icons/logo-small.svg";
import logo from "../../assets/icons/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link className="header__link header__link--mobile" to={"/"}>
            <img className="small-logo" src={lkt} alt="site logo" />
          </Link>
          <Link className="header__link header__link--desktop" to={"/"}>
            <img className="logo" src={logo} alt="site logo" />
          </Link>
        </div>
        <nav className="header__site-nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link className="header__nav-link" to={"/about"}>
                ABOUT
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={"/"}>
                WORK
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
