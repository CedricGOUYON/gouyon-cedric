import { Link } from "react-router";
import "./Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-section">
					<h3>Navigation</h3>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/my-skills">Mes compétences</Link>
						</li>
						<li>
							<Link to="/my-cv">Mon CV</Link>
						</li>
						<li>
							<Link to="/my-history">Mon histoire</Link>
						</li>
						<li>
							<Link to="/projects">Mes projets</Link>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3>Me suivre</h3>
					<ul>
						<li>
							<a
								href="https://github.com/CedricGOUYON"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/cedricgouyon/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<Link to="/contact-me">Me contacter</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<p>
					&copy; {currentYear} <span className="highlight">GOUYON Cédric</span>.
					Tous droits réservés.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
