function PackAndGoPage() {
  return (
    <main className="projet-page">
      <h1>Projet : SeanZ PackAndGo</h1>

      <section className="intro">
        <p>SeanZ PackAndGo est une plateforme immersive dédiée à l'exploration de voyages. Le site permet aux utilisateurs de découvrir des destinations de rêve, de consulter des itinéraires personnalisés et de s'inspirer pour leurs prochaines aventures. L'accent a été mis sur la qualité visuelle et une navigation fluide pour captiver l'utilisateur dès la première page et faciliter l'accès aux informations touristiques essentielles.</p>
      </section>

      <div className="links">
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-PackAndGo" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="/" title="Aperçu PackAndGo" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Interface Immersive :</strong> Utilisation avancée du CSS pour mettre en valeur des visuels haute définition et créer une atmosphère propice à l'évasion.
          </li>
          <li>
            <strong>Architecture des Destinations :</strong> Organisation structurée des données pour présenter les lieux par catégories (climat, type d'activité, budget) de manière intuitive.
          </li>
          <li>
            <strong>Navigation Intuitive :</strong> Mise en place d'un parcours utilisateur optimisé permettant de passer de la découverte d'un pays à la consultation des détails pratiques en un clic.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default PackAndGoPage;
