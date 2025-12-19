function KartalgoPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Kartalgo</h1>

      <section className="intro">
        <p>Kartalgo est une application web dynamique conçue pour offrir une interface de gestion fluide et performante. Ce projet met l'accent sur l'organisation des données et la rapidité d'interaction. L'objectif principal était de construire une application moderne utilisant les dernières technologies front-end pour garantir un rendu instantané et une maintenance simplifiée du code.</p>
      </section>

      <div className="links">
        <a href="https://wild-code-school-kartalgo.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-kartalgo" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://wild-code-school-kartalgo.vercel.app/" title="Aperçu Kartalgo" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Développement avec React :</strong> Utilisation des Hooks (useState, useEffect) pour une gestion d'état fluide et une interface réactive.
          </li>
          <li>
            <strong>Stylisation via Tailwind CSS :</strong> Mise en place d'un design système "Utility-First" permettant une interface cohérente, légère et entièrement personnalisable.
          </li>
          <li>
            <strong>Déploiement Continu (CI/CD) :</strong> Configuration et déploiement via Vercel pour garantir une mise en ligne automatique et optimisée à chaque modification du code.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default KartalgoPage;
