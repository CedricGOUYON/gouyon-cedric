import type { FC } from "react";
import "./MySkillsPage.css";

const atouts = [
  {
    id: "listen",
    img: "/assets/icones/picto_hearing_200.png",
    label: "Écoute",
    desc: "Attentif aux différentes demandes des collaborateurs et clients",
  },
  {
    id: "passion",
    img: "/assets/icones/picto_favorite_200.png",
    label: "Passion",
    desc: "Met beaucoup de cœur à l'ouvrage pour chaque projet",
  },
  {
    id: "creative",
    img: "/assets/icones/picto_file_open_200.png",
    label: "Créativité",
    desc: "Optimise au maximum chacune des idées selon les besoins et les envies",
  },
  {
    id: "ux",
    img: "/assets/icones/picto_category_200.png",
    label: "Ergonomie",
    desc: "Soucieux de l'expérience utilisateur",
  },
  {
    id: "access",
    img: "/assets/icones/picto_accessible_200.png",
    label: "Accessibilité",
    desc: "Crée des interfaces utilisables par tous, y compris les personnes en situation de handicap",
  },
  {
    id: "data",
    img: "/assets/icones/picto_database_200.png",
    label: "Données",
    desc: "Rigoureux dans la gestion des bases de données",
  },
  {
    id: "security",
    img: "/assets/icones/picto_security_200.png",
    label: "Sécurité",
    desc: "Sait garder le secret professionnel et respecter la loi RGPD",
  },
  {
    id: "veille",
    img: "/assets/icones/picto_visibility_200.png",
    label: "Veille technologique",
    desc: "Toujours à l'affût des nouvelles technologies",
  },
];

const outils = [
  { id: "vscode", img: "/assets/icones/icone-vscode.png", label: "VS Code" },
  { id: "html", img: "/assets/icones/icone-html.png", label: "HTML" },
  { id: "css", img: "/assets/icones/icone-css.png", label: "CSS" },
  { id: "js", img: "/assets/icones/icone-js.png", label: "JavaScript" },
  { id: "git", img: "/assets/icones/icone-git.png", label: "Git" },
  { id: "github", img: "/assets/icones/icone-github.png", label: "Github" },
  { id: "node", img: "/assets/icones/icone-node.png", label: "Node.js" },
  { id: "figma", img: "/assets/icones/icone-figma.png", label: "Figma" },
  {
    id: "wireframe",
    img: "/assets/icones/icone-wireframe.png",
    label: "Wireframe",
  },
  {
    id: "adobe",
    img: "/assets/icones/icone-adobe-color.svg",
    label: "Adobe",
  },
  {
    id: "pdf",
    img: "/assets/icones/icone-ilovepdf.webp",
    label: "I Love PDF & IMG",
  },
  {
    id: "crm",
    img: "/assets/icones/icone-kwixeo.png",
    label: "Kwixeo CRM/ERP",
  },
  {
    id: "google",
    img: "/assets/icones/icone-google.png",
    label: "Google Workspace",
  },
  {
    id: "office",
    img: "/assets/icones/icons8-logo-office-48.png",
    label: "Microsoft Office",
  },
  {
    id: "wappalyzer",
    img: "/assets/icones/icone-wappalyzer.webp",
    label: "Wappalyzer",
  },
  {
    id: "colorzilla",
    img: "/assets/icones/icone-colorzilla.png",
    label: "Colorzilla",
  },
];

const ressources = [
  {
    id: "pixabay",
    img: "/assets/icones/icone-pixabay.png",
    label: "Pixabay",
    desc: "Banque d’images libres de droits",
  },
  {
    id: "freepik",
    img: "/assets/icones/icone-freepik.svg",
    label: "Freepik",
    desc: "Ressources graphiques et vecteurs",
  },
  {
    id: "unsplash",
    img: "/assets/icones/icone-unsplash.png",
    label: "Unsplash",
    desc: "Photos haute qualité gratuites",
  },
  {
    id: "icons8",
    img: "/assets/icones/icone-icon8.png",
    label: "Icons8",
    desc: "Icônes et illustrations variées",
  },
  {
    id: "storyset",
    img: "/assets/icones/icone-Storyset.png",
    label: "Storyset",
    desc: "Illustrations personnalisables",
  },
  {
    id: "vecteezy",
    img: "/assets/icones/icone-vecteezy.png",
    label: "Vecteezy",
    desc: "Vecteurs et graphismes gratuits",
  },
  {
    id: "pexels",
    img: "/assets/icones/icone-pexels.png",
    label: "Pexels",
    desc: "Photos et vidéos libres",
  },
  {
    id: "google-fonts",
    img: "/assets/icones/icone-google-fonts.svg",
    label: "Google Fonts",
    desc: "Bibliothèque de polices web",
  },
  {
    id: "uiverse",
    img: "/assets/icones/icone-uiverse.png",
    label: "Uiverse",
    desc: "UI components et styles CSS",
  },
  {
    id: "coolors",
    img: "/assets/icones/icone-coolors.png",
    label: "Coolors",
    desc: "Générateur de palettes de couleurs",
  },
  {
    id: "adobe-color",
    img: "/assets/icones/icone-adobe-color.svg",
    label: "Color Adobe",
    desc: "Outil de création de palettes",
  },
  {
    id: "dribbble",
    img: "/assets/icones/icone-dribbble.png",
    label: "Dribbble",
    desc: "Communauté de designers",
  },
  {
    id: "pagespeed",
    img: "/assets/icones/icone-page-speed-insights.png",
    label: "Page speed insights",
    desc: "Analyse de performance web",
  },
  {
    id: "font-interceptor",
    img: "/assets/icones/icone-font-interceptor.png",
    label: "Font interceptor",
    desc: "Outil expérimental sur les polices",
  },
  {
    id: "w3c-validator",
    img: "/assets/icones/icone-w3c.png",
    label: "Validator W3C",
    desc: "Validation HTML officielle",
  },
  {
    id: "css-validator",
    img: "/assets/icones/icone-w3c.png",
    label: "Validateur CSS",
    desc: "Validation des feuilles de style",
  },
  {
    id: "mdn",
    img: "/assets/icones/icone-mdn.webp",
    label: "Mdn Web Docs",
    desc: "Documentation web de référence",
  },
];

const SkillsPage: FC = () => {
  return (
    <main className="skills-container">
      <section className="skills-header">
        <h2>Mes atouts & compétences</h2>
        <p>Curieux, autonome et toujours motivé à apprendre, je mets mon énergie au service des projets.</p>
      </section>

      <section>
        <div className="grid">
          {atouts.map((item) => (
            <figure key={item.id} className="card">
              <img src={item.img} alt={item.label} />
              <figcaption>
                <strong>{item.label}</strong>
              </figcaption>
              <p className="info">{item.desc}</p>
            </figure>
          ))}
        </div>
      </section>

      <section className="skills-header">
        <h2>Mes outils & langages</h2>
        <p>Mes compétences sont en constante amélioration, j'ai la chance d'exercer ce métier qui me permet d'apprendre chaque jour, d'autant plus que je suis passionné d'informatique depuis des années. impliqué, curieux des nouvelles fonctionnalités</p>
      </section>

      <section>
        <div className="grid">
          {outils.map((tool) => (
            <figure key={tool.id} className="card">
              <img src={tool.img} alt={tool.label} />
              <figcaption>{tool.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="skills-header">
        <h2>Mes principales ressources</h2>
        <p>Mes ressources sont le fruit d'un travail rigoureux, d'une veille constante et d'une passion pour le bon travail. Elles me servent quotidiennement pour apporter une valeur ajoutée et me démarquer dans un monde en constante évolution.</p>
      </section>

      <section>
        <div className="grid">
          {ressources.map((item) => (
            <figure key={item.id} className="card">
              <img src={item.img} alt={item.label} />
              <figcaption>
                <strong>{item.label}</strong>
              </figcaption>
              <p className="info">{item.desc}</p>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsPage;
