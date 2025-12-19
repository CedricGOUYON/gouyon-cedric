import { Link } from "react-router";
import "./Header.css";
import { constants } from "../../../../setup/constants";

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="left-side">
          <Link to="/" className="logo">
            {constants.APP_NAME}
          </Link>
        </div>

        <div className="nav-group">
          <Link to="/">ACCUEIL</Link>
          <Link to="/my-skills">Mes Compétences</Link>
          <Link to="/my-history">Mon Parcours</Link>
          <Link to="/my-cv">Mon CV</Link>
          <Link to="/projects">Mes projets</Link>
          <Link to="/contact-me">Me contacter</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
