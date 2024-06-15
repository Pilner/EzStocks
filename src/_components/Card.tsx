import Image from "next/image";
import Button from "@/_components/Button";
import styles from "./styles/Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.cardImage}>
        <Image
        src="images/placeholder1.png"
        alt="card"
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
        <div className={styles.cardText}>
        <h1 className="cardTitleFont">Humans are much more smarter than AI</h1>
        <p className="cardTextFont">
        Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.
        </p>
        <Button text="Learn more" url="#" />
        </div>
    </div>

  )
}
