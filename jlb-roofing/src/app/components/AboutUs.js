import React from "react";
import Image from "next/image";
import styles from "../styles/AboutUs.module.css"
import Siding1 from "../../../public/Siding1.jpg"
import { useEffect, useRef } from "react";



const OurMission = () => {
    
    return (
        <section className={styles.ourMission}>
            <div className={styles.missionImage}>
                < Image src={Siding1}  className={styles.missionImage}/>
            </div>
            <div className={styles.missionContent}>
                <h2>Committed to Serving Our Community</h2>
                <h3>Your Journey to a New Roof Starts Here</h3>
                <p>At JLB Roofing, we are a family-owned business dedicated to providing high-quality roofing installation and repair solutions. Founded with a strong commitment to excellence and customer satisfaction, we have established ourselves as a leading name in the roofing industry in Utah. Our team is composed of highly skilled professionals, led by our founder Omar Banegas, along with his father Lino Banegas and his sister Cindy Banegas. We take pride in delivering personalized service, using the best materials and innovative techniques to ensure the durability and resilience of every project we undertake. </p>
                
            </div>

        </section>
    )
}

export default OurMission