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

const imagesList = [
  {url: '/JLBphoto1.png', alt: 'First Image', type: 'image'},
  {url: '/JLBphoto2.png', alt: 'Second Image', type: 'image'},
  {url: '/JLBphoto3.png', alt: 'Third Image', type: 'image'},
  {url: '/JLBphoto4.png', alt: 'Fourth Image', type: 'image'},
  {url: '/JLBphoto5.png', alt: 'Fourth Image', type: 'image'},
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
        <section id="ourMission" className={styles.ourMission}>
          <OurMission />
        </section> 
        <section id="services" className={styles.services}>
          <Services/>
        </section>
        <div id="ourWork" className={styles.gallery}>
          <Gallery images= {imagesList}/>
        </div> 
      </main>
      <footer id="contact">
        <Contact/>
      </footer>
    </div>
  </>
  )
}