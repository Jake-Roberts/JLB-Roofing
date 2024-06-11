'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.nav}`) && !event.target.closest(`.${styles.hamburger}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/jblLogo.png" alt="Company Logo" width={150} height={150} />
        </div>
      </div>
      
      {/* Nav Links */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#ourMission">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#ourWork">Our Work</a></li>
          <li><a href="#howWeStarted">How we Started</a></li>
          <li><a href="#contact">Lets Talk</a></li>
          
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <button aria-label='menu button' className={`${styles.hamburger} ${isOpen ? styles.change : ''}`} onClick={() => setIsOpen(!isOpen)}>
          {/* Icon or text for menu toggle */}
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default NavBar;
