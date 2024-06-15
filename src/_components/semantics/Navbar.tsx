import Link from "next/link";
import Image from "next/image";

import Button from "@/_components/Button";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav id={styles.navbar}>
        <div className="container">
            <div className={styles.navLogoSide}>
                
                <div className={styles.navLogoImg}>
                    {/* <Image
                        src="/logo.png"
                        alt="logo"
                        width={0}
                        height={0}
                        style={{
                            width: "auto",
                            height: "100%"
                        }}
                        unoptimized={true}
                    /> */}
                </div>
                <div className={styles.navLogoText}>
                    <p>
                        EzStocks
                    </p>
                </div>
            </div>
            <div className={styles.navLinkSide}>
                <div>
                    <ul>
                        <li>
                            <Link href="#" scroll={false}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#" scroll={false}>
                                About
                            </Link>                            
                        </li>
                        <li>
                            <Link href="#" scroll={false}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Button text="Sign Up" url="/signup" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
