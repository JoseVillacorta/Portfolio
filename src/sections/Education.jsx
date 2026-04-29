import React, { useState } from 'react';
import './Education.css';

const Education = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const educations = [
        {
            id: 1,
            type: "Educación Universitaria",
            title: "Ingeniería Informática",
            institution: "Universidad Nacional de Trujillo",
            date: "2020 - 2025",
            description: "Bachiller en Ingeniería Informática, Arquitectura de Sistemas y bases de datos relacionales.",
            link: "https://drive.google.com/file/d/1UCKPS33QxHBtrVmC7FSf41idLR25mg9W/view?usp=sharing"
        },
        {
            id: 2,
            type: "Certificado",
            title: "Backend con NodeJS y NestJS",
            institution: "QUIPUS",
            date: "2024",
            description: "Curso intensivo sobre backend con NodeJS y NestJS, APIs REST, seguridad y despliegue de aplicaciones.",
            link: "https://drive.google.com/file/d/1XjqB6YpijQrMsJCCRzBDSjLebzTVBX7D/view?usp=drive_link"
        },
        {
            id: 3,
            type: "Certificado",
            title: "Scrum Foundation",
            institution: "CertiProf",
            date: "2024",
            description: "Conocimientos fundamentales del marco de trabajo Scrum.",
            link: "https://drive.google.com/file/d/1HjrTEdhjiHXzry7DLDQx0rPbpaRGkrSz/view?usp=drive_link"
        },
        {
            id: 4,
            type: "Certificado",
            title: "Certificado Ingles Nivel Básico",
            institution: "ICPNA",
            date: "2024 - 2025",
            description: "Conocimientos básicos del idioma inglés, certificado por el ICPNA.",
            link: "https://drive.google.com/file/d/1nYVyoUwprLfzgSjKc6D4yrObh6vIEVWL/view?usp=drive_link"
        },
        {
            id: 5,
            type: "Certificado",
            title: "Prácticas Pre-Profesionales",
            institution: "Municipalidad Distrital de Guadalupe",
            date: "2024",
            description: "Desarrollo de una plataforma web en PHP y MySQL para la gestión de visitas y citas de salud.",
            link: "https://drive.google.com/file/d/1c4guNOqhtpwEGKhxkSBUf5oyRfSkG0rJ/view?usp=drive_link"
        }
    ];

    // Función para abrir el modal transformando el link a "preview"
    const openModal = (link) => {
        if (!link) return;
        let previewLink = link;
        if (link.includes('/view')) {
            previewLink = link.replace(/\/view.*/, '/preview');
        }
        setSelectedCert(previewLink);

        // Evita que el fondo haga scroll cuando el modal está abierto
        document.body.style.overflow = 'hidden';
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'auto'; // Restaura el scroll
    };

    return (
        <section id="formacion" className="education-section">
            <div className="section-container">
                <h2 className="section-title">Mi <span className="highlight">Formación</span></h2>

                <div className="education-grid">
                    {educations.map(edu => (
                        <div
                            key={edu.id}
                            onClick={() => openModal(edu.link)}
                            className="education-card glass-panel"
                        >
                            <span className="edu-type">{edu.type}</span>
                            <h3 className="edu-title">{edu.title}</h3>
                            <h4 className="edu-institution">{edu.institution}</h4>
                            <p className="edu-date">{edu.date}</p>
                            <p className="edu-desc">{edu.description}</p>
                            {/* Solo mostramos el texto si hay un enlace */}
                            {edu.link && (
                                <div className="view-cert">
                                    <span>Ver Certificado ↗</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* --- EL CUADRO MODAL (Se muestra solo si hay un certificado seleccionado) --- */}
            {selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>
                    {/* e.stopPropagation evita que al hacer click dentro del cuadro se cierre */}
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>

                        <iframe
                            src={selectedCert}
                            title="Certificado"
                            className="cert-iframe"
                            allow="autoplay"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Education;
