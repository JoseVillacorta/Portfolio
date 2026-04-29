import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Desarrollador Backend Junior",
            company: "Agencia Consigue Ventas",
            date: "Octubre 2024 - Marzo 2025",
            description: [
                "Desarrollé y mantuve servicios backend en Python (Flask, Django), mejorando la organización de la lógica de negocio y la integración entre sistemas.",
                "Implementé APIs REST para la comunicación entre frontend y backend, facilitando el intercambio de datos de forma estructurada y eficiente.",
                "Gestioné bases de datos MySQL y PostgreSQL, optimizando consultas SQL para mejorar el rendimiento.",
                "Realicé pruebas funcionales de APIs con Postman, asegurando la correcta respuesta de endpoints.",
                "Trabajé bajo metodología Scrum, participando en sprints y reuniones ágiles."
            ],
            technologies: ["Python", "Flask", "Django", "MySQL", "PostgreSQL", "Postman", "Git/GitHub", "Scrum", "REST APIs", "Testing de APIs"]
        }
    ];

    return (
        <section id="experiencia" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">Experiencia <span className="highlight">Laboral</span></h2>

                <div className="timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-panel">
                                <h3 className="role">{exp.role}</h3>
                                <h4 className="company">{exp.company} <span>| {exp.date}</span></h4>
                                <ul>
                                    {exp.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="tech-stack">
                                    {exp.technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
