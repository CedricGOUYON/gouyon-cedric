function StreamFlixPage() {
  return (
    <main className="projet-page">
      <h1>Projet : StreamFlix</h1>

      <section className="intro">
        <p>StreamFlix est une plateforme de streaming immersive permettant de parcourir un vaste catalogue de films et de séries. L'objectif de ce projet était de recréer une expérience utilisateur proche des leaders du marché, en mettant l'accent sur le visuel, la fluidité de la navigation et la richesse des informations média. Le site gère l'affichage dynamique des titres, des notes et des descriptions.</p>
      </section>

      <div className="links">
        <a href="https://wild-code-school-streamflix.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-StreamFlix" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://wild-code-school-streamflix.onrender.com/" title="Aperçu StreamFlix" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Consommation d'API REST :</strong> Récupération et affichage de données en temps réel (titres, affiches, synopsis) via des appels asynchrones.
          </li>
          <li>
            <strong>Système de Recherche et Filtrage :</strong> Implémentation d'une logique permettant de trier les contenus par catégories ou de rechercher un titre spécifique.
          </li>
          <li>
            <strong>Architecture React :</strong> Organisation du code en composants réutilisables et gestion des états complexes pour une navigation sans rechargement.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default StreamFlixPage;
