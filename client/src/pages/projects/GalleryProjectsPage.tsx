import { Link } from "react-router";
import "./GalleryProjectsPage.css";
import clickDevlogo from "../../assets/logos/ClickDev.png";
import coreexlogo from "../../assets/logos/Coreex.png";
import fullstackstarterkitlogo from "../../assets/logos/FullstackStarterKit.png";
import kartalgologo from "../../assets/logos/KartAlgo.png";
import packandgologo from "../../assets/logos/PackAndGo.png";
import portfoliologo from "../../assets/logos/Portfolio.png";
import seanzlogo from "../../assets/logos/SeanZ.png";
import steamflixlogo from "../../assets/logos/StreamFlix.png";
import tealiilogo from "../../assets/logos/Tealii.png";

interface Project {
  id: string;
  title: string;
  description: string;
  path: string;
  image: string;
}

const projects: Project[] = [
  { id: "1", title: "ClickDev", description: "Application web pédagogique à l'apprentissage du développement web.", path: "/school-clickdev", image: clickDevlogo },
  { id: "2", title: "Correx Menuiserie", description: "Vitrine numérique pour une entreprise de menuiserie", path: "/coreex-menuiserie", image: coreexlogo },
  { id: "3", title: "SteamFlix", description: "Plateforme de streaming immersive", path: "/school-streamflix", image: steamflixlogo },
  { id: "4", title: "Kartalgo", description: "Application web de jeux d'algorithmes.", path: "/school-kartalgo", image: kartalgologo },
  { id: "5", title: "Fullstack Starter Kit", description: "Kit de démarrage fullstack pour créer rapidement des applications web évolutives", path: "/fullstack-starter-kit", image: fullstackstarterkitlogo },
  { id: "6", title: "Mon premier portfolio", description: "Ma toute première vitrine web, conçue pour présenter mon parcours et mes premières réalisations en tant que développeur.", path: "/portfolio", image: portfoliologo },
];

const prochainement: Project[] = [
  { id: "7", title: "SeanZ", description: "Plateforme culinaire pour cuisiner sainement avec des produits éco-responsables", path: "/projects", image: seanzlogo },
  { id: "8", title: "Pack And Go", description: "Site d'évasion pour explorer des destinations et planifier vos voyages", path: "/projects", image: packandgologo },
  { id: "9", title: "Tealii", description: "Application web de productivité avancée conçue pour centraliser et optimiser l'organisation du quotidien", path: "/projects", image: tealiilogo },
];

const GalleryProjectsPage = () => {
  return (
    <main className="gallery-page">
      <section className="shared-hero">
        <h1>Mes Projets</h1>
        <p>Laissez-vous guider par mon parcours à travers mes projets les plus récents. Cette galerie reflète mon évolution en tant que développeur, mêlant défis scolaires structurés et solutions innovantes.</p>
      </section>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.path} className="btn-details">
                Voir le projet
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="upcoming-section">
        <h2 className="prochainement">Prochainement</h2>
        <div className="projects-grid">
          {prochainement.map((project) => (
            <div key={project.id} className="project-card grayscale">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="badge-soon">Bientôt disponible</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryProjectsPage;
