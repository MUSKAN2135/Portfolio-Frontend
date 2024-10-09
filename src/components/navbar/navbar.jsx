import React, { useEffect, useState } from 'react'
import logo from '../../images/mylogo.png'
import './navbar.css'
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: scrollPosition > 50 ? 'white' : 'transparent',
    };

    const scrollToSection = () => {
        const section = document.getElementById('');

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50, // Adjust offset if needed
                behavior: 'smooth',
            });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <div className='top-bar d-flex justify-content-md-around justify-content-between px-md-0 align-items-center' style={navbarStyle}>
                <div className='logo d-flex flex-column align-items-center p-md-0 px-3' >
                    <img src={logo} alt='' />
                    <h6 className='name d-flex flex-column align-items-center'>MUSKAN KHAN
                        <span>Web Developer</span>
                    </h6>
                </div>
                <div className='links d-none d-md-flex align-items-center'>
                    <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a href="#aboutme" onClick={() => scrollToSection('About Me')}>About Me</a></li>
                    <li><a href="#whatido" onClick={() => scrollToSection('What I Do')}>What I Do</a></li>
                    <li><a href="#portfolio" onClick={() => scrollToSection('Portfolio')}>Portfolio</a></li>
                    <li><a href="#myResume" onClick={() => scrollToSection('My Resume')}>My Resume</a></li>
                    <li><a href="#contactme" onClick={() => scrollToSection('Contact Me')}>Contact Me</a></li>
                </div>
                <div className="bars d-flex d-md-none p-md-0 px-3" style={{ cursor: 'pointer' }} onClick={toggleMenu}>
                    {isMenuOpen ?
                        <FaBars className='fs-24' />
                        :
                        <FaBars className='fs-24' />
                    }
                </div>
            </div>
            {isMenuOpen &&
                <div className='navbarlnks' style={{ borderRadius: '10px', position: 'relative', top: '90px', height: '450px', width: '100%' }}>
                    <ul className='burgrlinks pt-4 list-unstyled px-3'>
                        <li className='py-3 border-bottom'><a style={{ textDecoration: 'none', color: 'gray' }} href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                        <li className='py-3 border-bottom'><a style={{ textDecoration: 'none', color: 'gray' }} href="#aboutme" onClick={() => scrollToSection('About Me')}>About Me</a></li>
                        <li className='py-3 border-bottom'><a style={{ textDecoration: 'none', color: 'gray' }} href="#whatido" onClick={() => scrollToSection('What I Do')}>What I Do</a></li>
                        <li className='py-3 border-bottom'><a style={{ textDecoration: 'none', color: 'gray' }} href="#portfolio" onClick={() => scrollToSection('Portfolio')}>Portfolio</a></li>
                        <li className='py-3 border-bottom'><a style={{ textDecoration: 'none', color: 'gray' }} href="#myResume" onClick={() => scrollToSection('My Resume')}>My Resume</a></li>
                        <li className='py-3 border-bottom'><a style={{ textDecoration: 'none', color: 'gray' }} href="#contactme" onClick={() => scrollToSection('Contact Me')}>Contact Me</a></li>
                    </ul>
                </div>
            }
        </div>
    )
}
