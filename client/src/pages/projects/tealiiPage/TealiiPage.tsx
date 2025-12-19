function TealiiPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Tealii</h1>

      <section className="intro">
        <p>Tealii est une application web de productivité avancée conçue pour centraliser et optimiser l'organisation du quotidien, tant sur le plan personnel que professionnel. Véritable assistant de gestion, Tealii permet de structurer ses tâches, de suivre ses objectifs et de gagner en efficacité. Ce projet repose sur une architecture robuste permettant une gestion fluide des données et une expérience utilisateur sans friction.</p>
      </section>

      <div className="links">
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu de l'application</h2>
        <iframe src="/" title="Aperçu Tealii" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Spécifications Techniques</h2>
        <ul>
          <li>
            <strong>Architecture Fullstack :</strong> Développement d'une solution complète avec React pour l'interface, Node.js/Express pour la logique serveur, et PostgreSQL pour la persistance des données.
          </li>
          <li>
            <strong>Gestion de l'État et des Tâches :</strong> Implémentation d'algorithmes de tri et de filtrage pour organiser les priorités et les flux de travail en temps réel.
          </li>
          <li>
            <strong>Sécurité et Authentification :</strong> Mise en place d'un système de gestion des utilisateurs pour garantir la confidentialité des données personnelles et professionnelles.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default TealiiPage;
