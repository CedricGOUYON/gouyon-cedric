import "./MyCvPage.css";
function CvPage() {
  return (
    <main className="cv-page">
      <section className="intro">
        <h1>Mon CV</h1>
        <p>Je vous invite à consulter mon CV directement ci-dessous pour une lecture rapide, ou à le télécharger au format PDF pour le conserver ou l'imprimer, afin d'étudier plus en détail la cohérence de mon profil avec vos besoins.</p>
      </section>

      <section className="cv-preview">
        <iframe src="/assets/docs/cv-cedric-gouyon.pdf" title="Aperçu de mon CV" width="100%" height="600px" style={{ border: "none" }}></iframe>
      </section>

      <section className="cv-download">
        <a href="/assets/docs/cv-cedric-gouyon.pdf" download className="download-btn">
          Télécharger mon CV
        </a>
      </section>
    </main>
  );
}

export default CvPage;
