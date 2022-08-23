import React, { useState, useEffect } from 'react'

export default function Header() {

    const [windowSize, setWindowSize] = useState('');

    const updateWindowWidth = () => {
        setWindowSize(window.innerWidth);
    }

    const [currentSection, setCurrentSection] = useState('home-section');
    let sections = [];

    useEffect(() => {
        sections = document.querySelectorAll('section');
        setWindowSize(window.innerWidth);
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

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if (windowSize <= 769) {
            setShowMenu(prevState => !prevState);
        }
        return
    }

    window.addEventListener('scroll', changeSection);
    window.addEventListener('resize', updateWindowWidth);



    return (
        <>
            <div className={`hamburger-container ${windowSize > 769 ? 'hide-btn' : 'show-btn'}`} onClick={toggleMenu}>
                <div className="hamburger"></div>
            </div>

            <header className={`${windowSize > 769 ? 'full-header' : 'mobile-header'} ${showMenu ? 'display-menu' : 'hide-menu'}`}>

                <ul>
                    <li><a href="#home-section" className={currentSection === 'home-section' ? 'active' : 'header-btn'} onClick={toggleMenu}>home</a></li>
                    <li><a href="#about-section" className={currentSection === 'about-section' ? 'active' : 'header-btn'} onClick={toggleMenu}>about</a></li>
                    <li><a href="#projects-section" className={currentSection === 'projects-section' ? 'active' : 'header-btn'} onClick={toggleMenu}>projects</a></li>
                    <li><a href="#contact-section" className={currentSection === 'contact-section' ? 'active' : 'header-btn'} onClick={toggleMenu}>contact</a></li>
                </ul>
            </header>
        </>
    )
}
