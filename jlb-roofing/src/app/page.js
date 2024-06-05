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
    {url: '/JLBphoto5.png', alt: 'Aerial view of a dark shingled roof with various roof structures and chimneys, set in a residential area with snow on the ground.', type: 'image'},
    {url: '/JLbphoto2.png', alt: 'View of a long, brown shingled roof with a clear blue sky in the background. Trees without leaves are visible along with other houses and backyards.', type: 'image'},
    {url: '/JLBphoto3.png', alt: 'A roof with dark shingles next to a stone chimney, overlooking a snowy landscape and a deck with a railing.', type: 'image'},
    {url: '/JLBphoto4.png', alt: 'View of a gray shingled roof from above, showing a well-maintained residential area with houses, driveways, and green lawns.', type: 'image'},
    {url: '/JLBphoto6.jpg', alt: 'A roof with light gray shingles viewed from above, set in a suburban neighborhood with a street and parked cars visible.', type: 'image'},
    {url: '/JLBphoto7.jpg', alt: 'A light brown shingled roof with multiple roof vents and structures, surrounded by green trees and a fenced backyard.', type: 'image'},
    {url: '/JLBphoto8.jpg', alt: 'Close-up of a brown shingled roof with a detailed view of the shingle pattern and a vent pipe. The background includes a green backyard.', type: 'image'},
    {url: '/JLBphoto9.jpg', alt: 'A gray shingled roof viewed from above, showing multiple roof angles and vents. The background includes a suburban neighborhood with green lawns.', type: 'image'},
    {url: '/JLBphoto10.jpg', alt: 'A roof with light gray shingles and multiple vent pipes, set in a residential neighborhood with green lawns and parked cars.', type: 'image'},
    {url: '/JLBphoto11.jpg', alt: 'A roof with brown shingles in a residential area. The roof is partially shaded by a large tree, and a white fence is visible in the background.', type: 'image'},
    {url: '/JLBphoto12.jpg', alt: 'Close-up view of a steep roof with dark gray shingles. The background shows some green trees and a fence.', type: 'image'},
    {url: '/JLBphoto13.jpg', alt: 'A roof with gray shingles, featuring a smooth and even shingle pattern. The background shows more residential roofs and greenery.', type: 'image'},
    {url: '/JLBphoto14.jpg', alt: 'A roof with dark gray shingles viewed from an elevated perspective, showing a well-maintained shingle pattern and a quiet street with cars parked.', type: 'image'},
  
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