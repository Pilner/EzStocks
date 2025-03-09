'use client';

import { getCsrfToken, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { SubmitButton } from "@/_components/Button";
import { InputText } from "@/_components/Input";

export default function Login() {

	const [csrfToken, setCsrfToken] = useState<string | undefined>("");

	useEffect(() => {
		const fetchData = async () => {
			const csrfToken = await getCsrfToken();
			setCsrfToken(csrfToken);
		}
		fetchData();
	}, []);

	async function onSubmit(e: any) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
        formData.append("csrfToken", csrfToken ?? "");

		try {
			const result = await signIn("credentials", {
				redirect: false,
				username: formData.get("username") as string,
				password: formData.get("password") as string,
			})

			if (result?.error) {
				throw new Error(result.error);
			} else if (result?.ok) {
				window.location.href = "/";
			}

		} catch (error) {
			alert("Invalid Username or Password");
			console.error(error);
		}
	}

    return (
		<section id={styles.loginPage}>
			<div className={styles.designPart}>
				<div className={styles.logoImg}>
					<a href="/">
						<Image
							alt="Logo"
							title="Go back to Home"
							src="/images/Logo.svg"	
							width={75}
							height={75}
							unoptimized={true}
							style={{
								margin: "1rem",
							}}
						/>
					</a>
				</div>
				<Image
					alt="Background Design"
					src="/images/signinout-bg.svg"
					width={0}
					height={0}
					style={{
						height: "80%",
						width: "100%",
						objectFit: "cover",
						alignSelf: "center",
						objectPosition: "30% 50%",
					}}
					unoptimized={true}
				/>
			</div>
			<div className={styles.infoPart}>
				<div className="container">
					<div>
						<h1 className="formsTitleFont">Sign In</h1>
						<p className="formsSubtitleFont">
							Don&apos;t have an account?{" "}
							<Link href="/signup">Sign Up</Link>
						</p>
					</div>
					<form
						id={styles.loginForm}
						onSubmit={onSubmit}
						method="POST"
					>
						<InputText
							type="text"
							text="Username"
							inputId="username"
							name="username"
							placeholder="Enter Input"
							required={true}
						/>
						<InputText
							type="password"
							text="Password"
							inputId="password"
							name="password"
							placeholder="Enter Input"
							required={true}
						/>
					</form>
					<div className={styles.termsConditionPart}>
						<div>
							<Link href="/login/forgot">Forgot password?</Link>
						</div>
						<SubmitButton text="Sign In" form={styles.loginForm} />
					</div>
				</div>
			</div>
		</section>
	);
};