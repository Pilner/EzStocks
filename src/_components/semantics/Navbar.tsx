'use client'

import { useSession } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";

import Button from "@/_components/Button";
import styles from "../styles/Navbar.module.css";
import aboutStyles from "@/app/page.module.css";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

interface SessionUser {
	id?: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
}

export default function Navbar() {

	const [session, setSession] = useState<boolean>(false);

	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			setSession(false);
		},
	});

	useEffect(() => {
		if (status === "authenticated") {
			setSession(true);
		}
	}, [status]);

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
							{session ? (
								<li>
									<Button text="Inventory" url="/inventory" />
								</li>
							) : (
								<li>
									<Button text="Sign Up" url="/signup" />
								</li>
							
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
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

	const [firstName, setFirstName] = useState<string>("First Name");

	const { data: session } = useSession();

	useEffect(() => {
		if (session) {
			const user_id = (session?.user as SessionUser)?.id;

			fetch(`/api/get/user/full`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						setFirstName(data.rows.UserInfo.first_name);
					}
				})
				.catch((err) => {
					console.error(err);
				});
		}
	});

	return (
		<nav id={styles.sideNavbar}>
			<div className={styles.navProfile}>
				<div className={styles.sideNavbarProfile}>
					<div className={styles.circle}>
						<i className="fa-solid fa-user fa-xl"></i>
					</div>
					<div className={styles.profileName}>
						<p>Hello, {firstName}!</p>
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
				<Link href="" onClick={() => {signOut()}} className={styles.sideNavbarLinks}>
					<div>
						<i className="fa-solid fa-right-from-bracket fa-2xl"></i>
					</div>
					<div>
						<p>Sign Out</p>
					</div>
				</Link>
			</div>
		</nav>
	);
}
