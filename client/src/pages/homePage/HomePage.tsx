import "./HomePage.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import cvImg from "../../assets/images/cv.png";
import projectsImg from "../../assets/images/projects.png";
import skillsImg from "../../assets/images/skills.png";

const sections = [
  {
    id: "skills",
    title: "Mes compétences et mes atouts",
    description: "Je vous invite à découvrir mes atouts et mes outils. Curieux, autonome et motivé, je mets mon énergie au service des projets. Vous trouverez ici les langages que j'apprends et pratique, mes ressources quotidiennes et les qualités humaines qui me guident : écoute, passion, créativité, ergonomie et souci de l'accessibilité.",
    image: skillsImg,
    imageAlt: "Illustration représentant les compétences techniques et humaines",
    link: "/my-skills",
    linkText: "Découvrir mes compétences",
    linkAriaLabel: "Naviguer vers la page de mes compétences",
    reverse: false,
  },
  {
    id: "cv",
    title: "Mon CV",
    description: "Je vous propose de parcourir mon CV complet, véritable fil conducteur de mon parcours. Avant de me tourner vers le développement web, j'ai évolué dans d'autres domaines qui m'ont permis d'acquérir des qualités humaines et professionnelles essentielles. Chaque étape raconte une progression, chaque expérience illustre ma volonté d'apprendre.",
    image: cvImg,
    imageAlt: "Aperçu du curriculum vitae",
    link: "/my-cv",
    linkText: "Consulter mon CV",
    linkAriaLabel: "Naviguer vers la page de mon CV",
    reverse: true,
  },
  {
    id: "projects",
    title: "Mes projets",
    description: "Laissez-vous guider vers mes premiers projets, des applications web complètes qui témoignent de mon apprentissage et de ma progression. Chaque projet est une étape, une expérience concrète où j'ai pu mettre en pratique mes compétences et explorer de nouvelles idées.",
    image: projectsImg,
    imageAlt: "Aperçu des projets réalisés",
    link: "/projects",
    linkText: "Explorer mes projets",
    linkAriaLabel: "Naviguer vers la page de mes projets",
    reverse: false,
  },
];

function HomePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Bienvenue</h1>
        <p className="hero-subtitle">Cette application web est plus qu'un simple portfolio : c'est mon espace personnel et créatif, une vitrine vivante où se rencontrent mes compétences, mon histoire et mes projets. Chaque section est pensée comme une étape de mon parcours, une preuve de mon savoir-faire et de ma vision.</p>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          className="content-section"
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
        >
          <div className={`section-content ${section.reverse ? "reverse" : ""}`}>
            {!section.reverse && (
              <div className="section-text">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <Link to={section.link} className="section-link" aria-label={section.linkAriaLabel}>
                  {section.linkText}
                </Link>
              </div>
            )}

            <img src={section.image} alt={section.imageAlt} className="section-image" loading="lazy" />

            {section.reverse && (
              <div className="section-text">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <Link to={section.link} className="section-link" aria-label={section.linkAriaLabel}>
                  {section.linkText}
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default HomePage;
