import Link from "next/link";
import Image from "next/image";

import Button from "@/_components/Button";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer id={styles.footer}>
        <div className="container">
            <div>
                <Image
                    src="/images/placeholder1.png"
                    alt="logo"
                    width={0}
                    height={0}
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                    }}
                    unoptimized={true}
                />
                <p className="footerTextFont">
                Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet
sintelit officia tconsequat
                </p>
            </div>
            <div>
                <h1 className="footerTitleFont">Connect with us</h1>
                <ul className="footerTextFont">
                    <li><i className="fa-brands fa-facebook fa-xl"></i></li>
                    <li><i className="fa-brands fa-facebook fa-xl"></i></li>
                    <li><i className="fa-brands fa-facebook fa-xl"></i></li>
                    <li><i className="fa-brands fa-facebook fa-xl"></i></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
