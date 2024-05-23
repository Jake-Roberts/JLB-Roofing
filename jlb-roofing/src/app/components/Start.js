import React from "react";
import Image from "next/image";
import styles from "../styles/Start.module.css"
import Siding1 from "../../../public/Siding1.jpg"
import { useEffect, useRef } from "react";



const HowWeStarted = () => {
    
    return (
        <section className={styles.startContainer}>
            <div className={styles.startContent}>
                <h2>How we got Started</h2>
                <p>The story of JLB Roofing began eight years ago when Omar Banegas started his career working as a roofing installer for various companies in Texas. With a constant desire to improve his income and skills, Omar moved to Utah, where he continued working in the roofing industry.
                The real change came in 2022. With a clear vision and the unwavering support of his family, Omar decided it was time to take the next step and start his own company. Thus, on October 24, 2022, JLB Roofing was officially founded. Although the first contracts began to arrive in 2023, this initial year was crucial for laying the solid foundations of the company. Thanks to a successful year, we were able to acquire essential equipment, tools, and vehicles for our work.
                Driven by our desire for continued growth, in 2024 we implemented a project office, allowing us to sign contracts with three major roofing companies in Utah, establish commercial agreements with suppliers, and attend key training sessions. This has opened up new opportunities for us, including the ability to allocate resources to handling home insurance claims, a challenge we are determined to tackle in the second half of this year.
                At JLB Roofing, every project is an opportunity to demonstrate our commitment to quality and customer satisfaction. We are excited about what the future holds and grateful for the trust our clients have placed in us.
                </p>
            </div>

        </section>
    )
}

export default HowWeStarted;