import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import styles from "./page.module.css";
import Button from "@/_components/Button";
import Card from "@/_components/Card";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <section id={styles.hero}>
      <div className="container">
        <div className={styles.heroText}>
          <h1 className="heroTitleFont">
            Get a lock on your stocks
          </h1>
          <p className="heroSubTitleFont">
            Lorem ipsum dolar sit amet constreteur
          </p>
          <Button text="Get Started" url="#" />
        </div>
        <div className={styles.heroImage}>
          <Image
            src="images/placeholder1.png"
            alt="hero"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
    <section id={styles.about}>
      <div className="container">
        <div>
          <h1 className="sectionTitleFont">About us</h1>
          <p className="sectionSubTitleFont">
          EzStocks offers a user-friendly inventory management solution for small businesses. Our system simplifies inventory processes, reduces costs, and aids in making informed decisions with intuitive features and straightforward functionality.
          </p>
        </div>
        <div>
          <div className={styles.aboutPictureSide}>
            <Image
              src="images/placeholder2.png"
              alt="hero"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              unoptimized={true}
            />
          </div>
          <div className={styles.aboutTextSide}>
            <ul>
              <li className="sectionTextFont">
                <i className="fa-regular fa-square-check"></i> User-friendly interface
              </li>
              <li className="sectionTextFont">
                <i className="fa-regular fa-square-check"></i> Accurate Inventory Data
              </li>
              <li className="sectionTextFont">
                <i className="fa-regular fa-square-check"></i> Efficient inventory movement
              </li>
              <li className="sectionTextFont">
                <i className="fa-regular fa-square-check"></i> Informed inventory decisions
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
          <h1 className="sectionTitleFont">Our goals</h1>
          <p className="sectionSubTitleFont">
          EzStocks aims to simplify inventory management for small businesses. We offer essential features like inventory tracking, order management, data visualization, and customer/supplier databases. Our user-friendly system helps startups reduce the need for extra manpower and resources, making inventory management easy and efficient.
          </p>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </section>
    <Footer />
    </>

  );
}
