function FullstackStarterKitPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Fullstack Starter Kit</h1>

      <section className="intro">
        <p>Fullstack Starter Kit est une base de démarrage moderne pensée pour accélérer le développement d’applications web complètes. Il combine un frontend React dynamique et un backend solide, offrant une structure claire pour la gestion des utilisateurs, des données et des échanges client-serveur. Conçu pour être évolutif et maintenable, il permet de se concentrer rapidement sur la valeur métier tout en s’appuyant sur une architecture fiable.</p>
      </section>

      <div className="links">
        <a href="https://fullstack-starter-kit.onrender.com" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/fullstack-starter-kit" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://fullstack-starter-kit.onrender.com" title="Aperçu Fullstack Starter Kit" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="documentation">
        <h2>Notice d'installation</h2>
        <h3>Créer et configurer cette application web fullstack étape par étape :</h3>
        <div className="pdf-container">
          <iframe src="/assets/docs/noticeAppWeb.pdf" title="Notice de création App Web Fullstack" width="100%" height="600px" style={{ border: "none" }}></iframe>
        </div>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Architecture API RESTful :</strong> Développement d'un serveur Node.js avec Express gérant les routes CRUD et la logique métier côté serveur.
          </li>
          <li>
            <strong>Gestion de Base de Données :</strong> Modélisation et intégration d'une base de données relationnelle PostgreSQL pour assurer le stockage et l'intégrité des données.
          </li>
          <li>
            <strong>Sécurité et Environnement :</strong> Mise en place de variables d'environnement pour la protection des données sensibles et configuration CORS pour sécuriser les échanges entre domaines.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default FullstackStarterKitPage;
