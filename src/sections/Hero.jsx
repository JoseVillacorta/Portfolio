import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero-container">
            <div className="hero-content">

                <p className="greeting">Hola, mi nombre es</p>
                <h1 className="name">
                    Jose <span className="highlight">Villacorta Tafur</span>
                </h1>
                <h2 className="role">Software Developer</h2>

                <p className="description">
                    Me especializo en el desarrollo de servicios backend y APIs REST, trabajando con tecnologías como <strong>Python, Java y Node.js</strong>.
                    Cuento con experiencia en el desarrollo de aplicaciones web. Además, tengo interés en áreas como automatización y testing.
                </p>

                <div className="hero-social">
                    <a href="https://github.com/JoseVillacorta" target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/jose-villacorta-tafur/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                    </a>
                    <a href="mailto:villacortafur@gmail.com" className="email-icon" title="Envíame un correo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </a>
                </div>

                <div className="hero-buttons">
                    <a href="#experiencia" className="btn btn-primary">Ver mi Experiencia</a>
                    <a href="#contacto" className="btn btn-outline">Contactarme</a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
