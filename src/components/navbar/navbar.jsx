import React, { useEffect, useState } from 'react'
import logo from '../images/mylogo.png'
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
        backgroundColor: scrollPosition > 50 ? 'transparent' : 'transparent',
    };

    const scrollToSection = () => {
        const section = document.getElementById('');
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50, 
                behavior: 'smooth',
            });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <div className='w-full flex md:justify-around justify-between md:px-0 px-8 items-center' style={navbarStyle}data-aos="fade-down">
                <div className='flex flex-col items-center text-white md:p-0 px-3' >
                    <img src={logo} alt='' className='w-24 h-24' />
                    <h6 className='flex flex-col items-center text-sm'>MUSKAN KHAN</h6>
                        <span className='text-xs'>Web Developer</span>
                </div>
                <div className='links hidden md:block items-center text-white'>
                    <a className='px-3 hover:text-yellow-500' href="#home" onClick={() => scrollToSection('home')}>Home</a>
                    <a className='px-3 hover:text-yellow-500' href="#aboutme" onClick={() => scrollToSection('About Me')}>About Me</a>
                    <a className='px-3 hover:text-yellow-500' href="#whatido" onClick={() => scrollToSection('What I Do')}>What I Do</a>
                    <a className='px-3 hover:text-yellow-500' href="#portfolio" onClick={() => scrollToSection('Portfolio')}>Portfolio</a>
                    <a className='px-3 hover:text-yellow-500' href="#myResume" onClick={() => scrollToSection('My Resume')}>My Resume</a>
                    <a className='px-3 hover:text-yellow-500' href="#contactme" onClick={() => scrollToSection('Contact Me')}>Contact Me</a>
                </div>
                <div className="flex md:hidden block md:p-0 px-3" style={{ cursor: 'pointer' }} onClick={toggleMenu}>
                    {isMenuOpen ?
                        <FaBars className='fs-24' />
                        :
                        <FaBars className='fs-24' />
                    }
                </div>
            </div>
            {isMenuOpen &&
                <div style={{ borderRadius: '10px', position: 'relative', top: '20px', height: '250px', width: '100%' }}>
                    <ul className='pt-4 px-3 flex flex-col shadow-lg'>
                        <a className='m-3' href="#home" onClick={() => scrollToSection('home')}>Home</a>
                        <a className='m-3' href="#aboutme" onClick={() => scrollToSection('About Me')}>About Me</a>
                        <a className='m-3' href="#whatido" onClick={() => scrollToSection('What I Do')}>What I Do</a>
                        <a className='m-3' href="#portfolio" onClick={() => scrollToSection('Portfolio')}>Portfolio</a>
                        <a className='m-3' href="#myResume" onClick={() => scrollToSection('My Resume')}>My Resume</a>
                        <a className='m-3' href="#contactme" onClick={() => scrollToSection('Contact Me')}>Contact Me</a>
                    </ul>
                </div>
            }
        </div>
    )
}
