import Link from "next/link";
import Image from "next/image";

import Button from "@/_components/Button";
import styles from "../styles/Navbar.module.css";
import aboutStyles from "@/app/page.module.css";

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
                            <Link href="/" scroll={false}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <a href={`/#${aboutStyles.about}`}>
                                About
                            </a>                            
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

export function AuthenticatedNavbar() {
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
						<p>EzStocks</p>
					</div>
				</div>
				<div className={styles.navLinkSide}>
					<div>
						<ul>
							<li>
								<Link href="/" scroll={false}>
									Home
								</Link>
							</li>
							<li>
								<a href={`/#${aboutStyles.about}`}>About</a>
							</li>
							<li>
								<Button text="Inventory" url="/inventory" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export function SideNavbar() {
    return(
        <nav id={styles.sideNavbar}>
            <div className={styles.navProfile}>
                <div className={styles.sideNavbarProfile}>
                    <div className={styles.circle}>
                        <i className="fa-solid fa-user fa-xl"></i>
                    </div>
                    <div className={styles.profileName}>
                        <p>Hello, First Name!</p>
                    </div>
                </div>
                <Link href="/" className={styles.sideNavbarLinks}>
                    <div>
                        <i className="fa-solid fa-house fa-2xl"></i>
                    </div>
                    <div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link href="/inventory" className={styles.sideNavbarLinks}>
                    <div>
                        <i className="fa-solid fa-boxes fa-2xl"></i>
                    </div>
                    <div>
                        <p>Inventory Manager</p>
                    </div>
                </Link>
                <Link href="/profile/edit" className={styles.sideNavbarLinks}>
                    <div>
                        <i className="fa-solid fa-user fa-2xl"></i>
                    </div>
                    <div>
                        <p>Edit Profile</p>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
