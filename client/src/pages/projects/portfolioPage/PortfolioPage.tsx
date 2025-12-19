function PortfolioUnPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Portfolio v1</h1>

      <section className="intro">
        <p>Ce projet marque la création de ma toute première identité numérique en tant que développeur. L'objectif était de concevoir un espace personnel pour centraliser mes compétences, mon parcours et mes premières réalisations. Entièrement réalisé à la main, ce portfolio m'a permis de consolider mes bases en développement front-end et de mettre en place une interface claire et professionnelle.</p>
      </section>

      <div className="links">
        <a href="https://cedricgouyon.github.io/portfolio-1-cedric/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/portfolio-1-cedric" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/portfolio-1-cedric/" title="Aperçu Portfolio v1" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Design Responsive (Mobile First) :</strong> Conception pensée d'abord pour les smartphones afin de garantir une lisibilité parfaite sur tous les écrans.
          </li>
          <li>
            <strong>Animations CSS Personnalisées :</strong> Utilisation des Keyframes et transitions CSS pour dynamiser l'interface et améliorer l'expérience utilisateur.
          </li>
          <li>
            <strong>Déploiement GitHub Pages :</strong> Mise en place d'un workflow simple pour l'hébergement gratuit et rapide du code source.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default PortfolioUnPage;
