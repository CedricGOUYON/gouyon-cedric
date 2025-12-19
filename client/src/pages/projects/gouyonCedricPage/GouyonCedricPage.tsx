function GouyonCedricPage() {
  return (
    <main className="projet-page">
      <h1>Projet : portfolio</h1>

      <section className="intro">
        <p>Click Dev’ est une plateforme ludique d’apprentissage du développement web. Elle propose des quiz interactifs par niveaux (débutant, intermédiaire) sur des technologies clés comme HTML, CSS, JavaScript ou Git.</p>
      </section>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/click-dev/index.html" title="Aperçu portfolio" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>Développement en HTML, CSS et JavaScript</li>
          <li>Design responsive et adapté aux mobiles</li>
          <li>Hébergement via GitHub Pages</li>
        </ul>
      </section>
    </main>
  );
}

export default GouyonCedricPage;
