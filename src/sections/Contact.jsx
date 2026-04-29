import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section id="contacto" className="contact-section">
                <div className="contact-container">
                    <h2 className="pre-title">¿Qué sigue?</h2>
                    <h3 className="contact-title">Envíame un <span className="highlight">Mensaje</span></h3>

                    <p className="contact-desc">
                        Si tienes una propuesta, pregunta o quieres que trabajemos juntos, escríbeme y te responderé lo antes posible.
                    </p>

                    {/* Formulario conectado a Web3Forms para enviar al correo con adjuntos */}
                    <form className="contact-form glass-panel" action="https://api.web3forms.com/submit" method="POST" encType="multipart/form-data">

                        <input type="hidden" name="access_key" value="56e37a87-87fc-48bc-8443-71c99a3c7d41" />

                        <div className="form-group">
                            <label htmlFor="email">Tu Correo:</label>
                            <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Asunto:</label>
                            <input type="text" id="subject" name="subject" required placeholder="Propuesta de proyecto..." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Hola Jose, me gustaría hablar contigo sobre..."></textarea>
                        </div>

                        <div className="form-group file-group">
                            <label htmlFor="attachment" className="file-label">
                                Adjuntar Archivo (opcional, máx. 5MB)
                            </label>
                            <input type="file" id="attachment" name="attachment" className="file-input" />
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </section>

            <footer className="footer dark-footer">
                <div className="footer-content">
                    <p className="footer-text">
                        Diseñado y construido por Jose Villacorta &copy; {new Date().getFullYear()}
                    </p>

                    <div className="social-links">
                        <a href="https://github.com/JoseVillacorta" target="_blank" rel="noreferrer" className="social-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/jose-villacorta-tafur/" target="_blank" rel="noreferrer" className="social-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
