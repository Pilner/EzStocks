import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <div className="container">
                <div>
                    <Image
                        src="/images/Logo_Bottom_Text.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
							border: "1px solid rgba(0,0,0,0.2)"
                        }}
                        unoptimized={true}
                    />
                    <p className="footerTextFont">
                        &copy;2024 EzStocks<br />All Rights Reserved.
                    </p>
                </div>
                <div>
                    <h1 className="footerTitleFont">Connect with us</h1>
                    <ul className="footerTextFont">
                        <li><Link href="#"><i className="fa-brands fa-facebook fa-xl"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-x-twitter fa-xl"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-instagram fa-xl"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-linkedin fa-xl"></i></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
