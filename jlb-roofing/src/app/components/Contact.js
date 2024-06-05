import React from 'react';
import Image from 'next/image';
import styles from '../styles/Contacts.module.css'; // Adjust path as needed
import InstagramLogo from '../../../public/InstagramLogo.svg'
import faceBookIcon from '../../../public/facebookIcon.svg'
import youtubeIcon from '../../../public/youtubeIcon2.svg'


const Contact = () => {
  return (
    <section className={styles.contactContainer}>    
        < div className={styles.contactContent}>
                <h1>Let's Talk!</h1>
        <div className={styles.info} >
            <div className={styles.address}>
                <address>
                JLB Roofing LLC.<br/>
                10575 S 420 E, <br/>
                SANDY, UT 84070.
                </address>
            </div>
            <div className={styles.contactInfo}>
                <div>
                    Phone: 801-645-1647 <br/>
                    Email: projects.jlbroofing@gmail.com <br/>     
                </div>
            </div>
            
        </div>      
            <div className={styles.estimate}>
                <button className={styles.estimateBtn}><a href="#hero">Get Your Free Estimate</a></button>
            </div>
        </div>
    </section>
  );
};

export default Contact;