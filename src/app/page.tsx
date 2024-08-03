import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import styles from "./page.module.css";
import Button from "@/_components/Button";

import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <section id={styles.hero}>
                <div className="container">
                    <div className={styles.heroText}>
                        <h1 className="heroTitleFont sub-accent">
                            Get a lock on your stocks
                        </h1>
                        <p className="heroSubTitleFont">
                            Take control with accurate stock management 
                            at your fingertips.
                        </p>
                        <Button text="Get Started" url="#" />
                    </div>
                    <div className={styles.heroImage}>
                        <Image
                            src="images/homepage-bg-1.png"
                            alt="hero"
                            width={0}
                            height={0}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            unoptimized={true}
                        />
                    </div>
                </div>
            </section>
            <section id={styles.about}>
                <div className="container">
                    <div>
                        <h1 className="sectionTitleFont sub-accent">About us</h1>
                        <p className="sectionSubTitleFont">
                            EzStocks offers a user-friendly inventory management solution for small businesses. Our system simplifies inventory processes, reduces costs, and aids in making informed decisions with intuitive features and straightforward functionality.
                        </p>
                    </div>
                    <div>
                        <div className={styles.aboutPictureSide}>
                            <Image
                                src="images/homepage-bg-2.png"
                                alt="hero"
                                width={0}
                                height={0}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                                unoptimized={true}
                            />
                        </div>
                        <div className={styles.aboutTextSide}>
                            <ul>
                                <li className="sectionTextFont">
                                    <i className="fa-regular fa-square-check"></i> <span className="sub-accent">User-friendly interface</span>
                                </li>
                                <li className="sectionTextFont">
                                    <i className="fa-regular fa-square-check"></i> <span className="sub-accent">Accurate Inventory Data</span>
                                </li>
                                <li className="sectionTextFont">
                                    <i className="fa-regular fa-square-check"></i> <span className="sub-accent">Efficient inventory movement</span>
                                </li>
                                <li className="sectionTextFont">
                                    <i className="fa-regular fa-square-check"></i> <span className="sub-accent">Informed inventory decisions</span>
                                </li>
                            </ul>
                            <Button text="Learn More" url="#" />
                        </div>
                    </div>
                </div>
            </section>
            <section id={styles.goals}>
                <div className="container">
                    <div>
                        <h1 className="sectionTitleFont sub-accent">Our goals</h1>
                        <p className="sectionSubTitleFont">
                            EzStocks aims to simplify inventory management for small businesses. We offer essential features like inventory tracking, order management, data visualization, and customer/supplier databases. Our user-friendly system helps startups reduce the need for extra manpower and resources, making inventory management easy and efficient.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}
