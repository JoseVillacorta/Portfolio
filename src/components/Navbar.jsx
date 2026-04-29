import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            // Efecto de cristal en el navbar
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Lógica para detectar la sección activa en la pantalla
            const sections = ['inicio', 'experiencia', 'formacion', 'proyectos', 'habilidades', 'contacto'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Si la sección está visible en la mitad superior de la pantalla
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // Contenedor del navbar
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="logo">
                    <a href="#inicio">J<span className="highlight">V</span>.</a>
                </div>
                <ul className="nav-links">
                    <li><a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a></li>
                    <li><a href="#experiencia" className={activeSection === 'experiencia' ? 'active' : ''}>Experiencia</a></li>
                    <li><a href="#formacion" className={activeSection === 'formacion' ? 'active' : ''}>Formación</a></li>
                    <li><a href="#proyectos" className={activeSection === 'proyectos' ? 'active' : ''}>Proyectos</a></li>
                    <li><a href="#habilidades" className={activeSection === 'habilidades' ? 'active' : ''}>Habilidades</a></li>
                    <li><a href="#contacto" className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
