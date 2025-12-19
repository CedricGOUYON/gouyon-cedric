function SchoolClickDevPage() {
  return (
    <main className="projet-page">
      <h1>Projet : ClickDev</h1>

      <section className="intro">
        <p>Conception et développement d'une application pédagogique immersive dédiée à l'apprentissage du développement web. Ce projet a été pensé comme un outil d'auto-évaluation permettant aux apprenants de tester leurs connaissances théoriques et pratiques à travers un système de quiz interactif. L'expérience est scindée en deux niveaux de progression : un mode "Débutant" pour consolider les bases (syntaxe, balisage) et un mode "Avancé" pour valider des concepts plus complexes (logique de programmation, manipulation du DOM).</p>
      </section>

      <div className="links">
        <a href="https://cedricgouyon.github.io/wild-code-school-ClickDev/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>

        <a href="https://github.com/CedricGOUYON/wild-code-school-ClickDev" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/wild-code-school-ClickDev/" title="Aperçu ClickDev" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Système de Gamification :</strong> Logique conditionnelle gérant la progression entre les deux niveaux.
          </li>
          <li>
            <strong>Moteur de Quiz :</strong> Algorithme de vérification en temps réel et feedback instantané.
          </li>
          <li>
            <strong>Interface UI/UX :</strong> Design responsive avec barre de progression et transitions fluides.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default SchoolClickDevPage;
