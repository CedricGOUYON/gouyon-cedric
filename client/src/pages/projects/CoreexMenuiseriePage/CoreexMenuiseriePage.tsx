function CoreexMenuiseriePage() {
  return (
    <main className="projet-page">
      <h1>Projet : Coreex Menuiserie</h1>

      <section className="intro">
        <p>Ce projet est une vitrine numérique conçue pour une entreprise de menuiserie. Il met en avant les services, les réalisations et l’identité visuelle de l’entreprise. L’objectif était de créer un site clair, ergonomique et moderne, tout en respectant les bonnes pratiques d’accessibilité et de performance pour offrir une expérience utilisateur fluide sur tous les supports.</p>
      </section>

      <div className="links">
        <a href="https://cedricgouyon.github.io/coreex-menuiserie/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/coreex-menuiserie" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/coreex-menuiserie/" title="Aperçu Coreex Menuiserie" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Optimisation SEO et Performance :</strong> Analyse et amélioration des scores Lighthouse pour un référencement naturel optimal.
          </li>
          <li>
            <strong>Accessibilité Numérique :</strong> Respect des normes d'accessibilité (sémantique HTML, contrastes, navigation clavier).
          </li>
          <li>
            <strong>Galerie Interactive :</strong> Mise en place d'une présentation dynamique des réalisations de l'entreprise.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default CoreexMenuiseriePage;
