import React from 'react';
import './Skills.css';

const Skills = () => {
    // Ahora usamos enlaces directos a los logos oficiales de Devicon
    const skillCategories = [
        {
            title: "Lenguajes de Programación",
            skills: [
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
                { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
            ]
        },
        {
            title: "Frameworks y Tecnologías",
            skills: [
                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
                { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
                { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
                { name: "OAuth2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
            ]
        },
        {
            title: "Base de Datos",
            skills: [
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
            ]
        },
        {
            title: "Herramientas y DevOps",
            skills: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
                { name: "Jenkis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
            ]
        },
        {
            title: "Arquitectura y Conceptos",
            skills: [
                { name: "REST APIs", icon: "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" },
                { name: "Microservicios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
                { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
                { name: "Scrum", icon: "/public/scrum.png" },
                { name: "Modelo en cascada", icon: "/public/cascada.png" },
                { name: "Pruebas funcionales manuales", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" }
            ]
        },
        {
            title: "Habilidades Blandas",
            skills: [
                { name: "Pensamiento Analítico" },
                { name: "Resolución de Problemas" },
                { name: "Trabajo en Equipo" },
                { name: "Comunicación Asertiva" },
                { name: "Adaptabilidad" },
                { name: "Proactividad" }
            ]
        }
    ];

    return (
        <section id="habilidades" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">Mis <span className="highlight">Habilidades</span></h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card glass-panel">
                            <h3 className="category-title">{category.title}</h3>

                            {category.title === "Habilidades Blandas" ? (
                                <ul className="soft-skills-list">
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="soft-skill-item">
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="skills-icons-container">
                                    {category.skills.map((skill, i) => (
                                        <div key={i} className="skill-icon-box">
                                            {skill.icon && (
                                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                            )}
                                            <span className="skill-name-icon">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
