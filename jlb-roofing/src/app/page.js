// src/app/page.js
'use client'
import Image from "next/image";
import Head from "next/head";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import OurMission from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import HowWeStarted from "./components/Start";

const imagesList = [
  {url: '/JLBphoto5.png', alt: 'First Image', type: 'image'},
  {url: '/JLbphoto2.png', alt: 'Second Image', type: 'image'},
  {url: '/JLBphoto3.png', alt: 'Third Image', type: 'image'},
  {url: '/JLBphoto4.png', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto6.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto7.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto8.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto9.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto10.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto11.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto12.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto13.jpg', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto14.jpg', alt: 'Fourth Image', type: 'image'},

];

export default function Home() {
  return (
  <>
    <div>
      <header className= {styles.navBar}><NavBar /></header>
      <main>
        <div id="hero" className={styles.hero}>
          <Hero />
        </div>
        <section id="services" className={styles.services}>
          <Services/>
        </section>
        <section id="ourMission" className={styles.ourMission}>
          <OurMission />
        </section> 
        <div id="ourWork" className={styles.gallery}>
          <Gallery images= {imagesList}/>
        </div> 
        <section id="howWeStarted" className={styles.howWeStarted}>
          <HowWeStarted />
        </section> 
      </main>
      <footer id="contact">
        <Contact/>
      </footer>
    </div>
  </>
  )
}
