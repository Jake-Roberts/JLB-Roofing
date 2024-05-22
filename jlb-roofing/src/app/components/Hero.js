'use client'
import React, {useState, useEffect} from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css"


const Hero = () => {
    
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroH1}>Welcome to JBL Roofing LLC!</h1>
                <p>We're glad you're here. Call us to get started on your project today!</p>
                <button className={styles.callUs}>
                    <a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'white' }}>Call Us</a>
                </button>
                
            </div>
        </div>
    );
};

export default Hero;