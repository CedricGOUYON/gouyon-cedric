function SchoolSeanZPage() {
  return (
    <main className="projet-page">
      <h1>Projet : SeanZ Cuisine</h1>

      <section className="intro">
        <p>SeanZ Cuisine est une plateforme engagée dédiée à la gastronomie saine et éco-responsable. L'application guide les utilisateurs vers une alimentation équilibrée tout en sensibilisant aux enjeux écologiques, notamment à travers la sélection de produits de saison et la réduction du gaspillage. C'est un outil complet qui allie plaisir culinaire et respect de l'environnement pour une cuisine durable au quotidien.</p>
      </section>

      <div className="links">
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-seanz" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="/" title="Aperçu SeanZ Cuisine" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Gestion de Contenu Thématique :</strong> Organisation d'une base de recettes filtrables par critères nutritionnels et impact écologique (saisonnalité, local).
          </li>
          <li>
            <strong>Design Éco-Conçu :</strong> Réflexion sur une interface épurée et optimisée, limitant la consommation de ressources tout en offrant une navigation fluide et appétissante.
          </li>
          <li>
            <strong>Interactivité Pédagogique :</strong> Mise en place de fiches détaillées incluant des conseils santé et des astuces pour cuisiner de manière plus écologique.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default SchoolSeanZPage;
