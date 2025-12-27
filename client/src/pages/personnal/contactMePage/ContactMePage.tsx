import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import profile from "../../../assets/images/profile.png";
import "./ContactMePage.css";

function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_6wafpsh";
    const TEMPLATE_ID = "template_t9pz6cd";
    const PUBLIC_KEY = "cz-mYPOm1M_f8liS6";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCÈS!", response.status, response.text);

        toast.success("Message envoyé avec succès ! Merci.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur EmailJS détaillée:", error);

        toast.error(`Erreur d'envoi : ${error.text || "Un problème est survenu"}`);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contactez-moi</h1>
        <p className="hero-intro">N’hésitez pas à me contacter, pour un éventuel entretien ou un rendez-vous, même juste pour une question.</p>
      </section>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="profile-container">
            <img src={profile} alt="Cédric Gouyon" className="profile-img" />
          </div>
          <div className="info-item">
            <h2>Cédric Gouyon</h2>
            <h3>Développeur web/web mobile FullStack</h3>
            <p>Je serais ravi de discuter avec vous des opportunités de collaboration et de vous présenter plus en détail comment je peux contribuer à votre entreprise</p>
          </div>

          <div className="info-item">
            <h3>Téléphone / SMS</h3>
            <a href="tel:0675564852" className="info-link">
              06 75 56 48 52
            </a>
          </div>

          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:gouyoncedric@gmail.com" className="info-link">
              gouyoncedric@gmail.com
            </a>
          </div>

          <div className="info-item">
            <h3>Adresse</h3>
            <p>
              17 Chemin de la Parée Verte
              <br />
              85160 Saint Jean de Monts
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Votre Nom</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jean Dupont" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Votre Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre Message</label>
            <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Comment puis-je vous aider ?" required></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
