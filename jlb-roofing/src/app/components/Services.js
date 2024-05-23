import React from "react";
import Image from "next/image";
import styles from "../styles/Services.module.css"



const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.servicesContent}>
                <h1 className={styles.header}>What we Offer </h1>
                <div className={styles.articles}>
                    <article className={styles.article}>JBL Roofing Utah offers a range of High Quality roofing solutions to cater to your needs. Our services include:
                        <br/>   - Roof Installation and Replacement
                        <br/>   - Roof Repair and Maintenance
                        <br/>   - New Construction Roofing 
                    </article>
                    <article className={styles.article}>We are committed to delivering exceptional craftsmanship and outstanding customer service to ensure your complete satisfaction.</article>
                </div>
                <div className={styles.servicesButtonContainer}>
                    <button className={styles.servicesButton}><a href="#contact">Contact Us!</a></button>
                </div>
            </div>
        </section>
    )
}

export default Services