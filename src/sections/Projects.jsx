import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Banking Microservices Platform",
            description: [
                "Diseñé y desarrollé una arquitectura basada en microservicios con Spring Boot, Spring Cloud y WebFlux, orientada a sistemas escalables.",
                "Implementé servicios backend para gestión de clientes, cuentas y transacciones, simulando un entorno bancario real.",
                "Desarrollé un API Gateway para centralizar el acceso, mejorar la seguridad y gestionar el enrutamiento dinámico.",
                "Integré Spring Cloud Config y Eureka para la configuración centralizada y descubrimiento de servicios.",
                "Implementé seguridad mediante OAuth2 y JWT, asegurando autenticación y autorización de servicios.",
                "Gestioné persistencia reactiva con PostgreSQL y R2DBC, optimizando el manejo de datos.",
                "Desplegué la solución en contenedores con Docker y Docker Compose, facilitando la portabilidad del sistema."
            ],
            technologies: ["Java", "Spring Boot", "Spring Cloud", "Webflux", "PostgreSQL", "R2DBC", "Docker", "OAuth2", "JWT", "API Gateway", "Microservices Architecture", "Service Discovery", "Reactive Programming"],
            github: "https://github.com/JoseVillacorta/Banking-system",
            demo: "#"
        },
        {
            id: 2,
            title: "Platform to support home visits",
            description: [
                "Desarrollé una plataforma web en PHP y MySQL para la gestión de visitas domiciliarias y citas de salud.",
                "Implementé un módulo de agendamiento dinámico con calendario interactivo y control de disponibilidad en tiempo real.",
                "Gestioné la base de datos MySQL con arquitectura relacional, optimizando el almacenamiento de registros de 'Actores Sociales' y el historial de consultas ciudadanas mediante procedimientos eficientes en PHP.",
                "Implementé lógica de validación del lado del servidor para garantizar la integridad de los datos recogidos durante las visitas domiciliarias, reduciendo errores en el padrón nominal.",
                "Desarrollé un sistema de FAQs y asesoría técnica para mejorar la comunicación y tiempos de respuesta.",
            ],
            technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "MVC", "Procedimientos Almacenados", "API REST"],
            github: "https://github.com/JoseVillacorta/PadronNominal",
            demo: "#"
        },
    ];

    return (
        <section id="proyectos" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">Mis <span className="highlight">Proyectos</span></h2>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card glass-panel">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">
                                    <ul className="project-description-list">
                                        {project.description.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </p>

                                <div className="tech-stack">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer" className="btn-small">
                                    Ver Código (GitHub)
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
