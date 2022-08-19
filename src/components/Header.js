import React, { useState, useEffect } from 'react'

export default function Header() {
    const [currentSection, setCurrentSection] = useState('home-section');
    let sections = [];
    
    useEffect(() => {
        sections = document.querySelectorAll('section');
    }, []);

    const changeSection = () => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                setCurrentSection(section.getAttribute('id'));
            }
        });
    }

    window.addEventListener('scroll', changeSection);

    return (
        <header>
            <ul>
                <li><a href="#home-section" className={currentSection === 'home-section' ? 'active' : 'header-btn'}>home</a></li>
                <li><a href="#about-section" className={currentSection === 'about-section' ? 'active' : 'header-btn'}>about</a></li>
                <li><a href="#projects-section" className={currentSection === 'projects-section' ? 'active' : 'header-btn'}>projects</a></li>
                <li><a href="#contact-section" className={currentSection === 'contact-section' ? 'active' : 'header-btn'}>contact</a></li>
            </ul>
        </header>

    )
}
