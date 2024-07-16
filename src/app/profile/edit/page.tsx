'use client'

import styles from './page.module.css';

import { FormEvent, useEffect, useState } from "react";

import { SubmitButton } from "@/_components/Button";
import { SideNavbar } from '@/_components/semantics/Navbar';
import { InputText, InputNumber, InputGender, InputBirthday, InputTextReadOnly } from "@/_components/Input";

export default function ProfileEdit() {

	const [data, setData] = useState({
		username: "",
		email: "",
		fname: "",
		lname: "",
		phone_number: "",
		birthday: "",
		gender: "",
	});

	// fetch data
	useEffect(() => {
		// Fetch the data from the server
		getUserData().then((data) => {
			if (data) {
				setData({
					username: data.rows.username,
					email: data.rows.UserInfo.email,
					fname: data.rows.UserInfo.first_name,
					lname: data.rows.UserInfo.last_name,
					phone_number: data.rows.UserInfo.phone_number,
					birthday: data.rows.UserInfo.birthday,
					gender: data.rows.UserInfo.gender
				});
				console.log(data);
			}
		});
	}, [])

	async function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// Get the form data
		let formData = new FormData(e.currentTarget);

		// Convert the form data to JSON
		let jsonData = JSON.stringify(Object.fromEntries(formData));

		// Send the data to the server
		fetch("/api/edit/profile", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: jsonData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.status == 409) {
					alert("Username already exists");
				}
				if (data.status == 400) {
					alert("Bad Request");
				}
				if (data.status == 201) {
					alert("Profile updated successfully");
					window.location.href = "/profile/edit";
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}



    return (
		<section id={styles.editProfilePage}>
			<SideNavbar />
			<div className={styles.infoPart}>
				<div className="container">
					<div>
						<h1 className="formsTitleFont">Edit Profile</h1>
					</div>
					<form
						id={styles.editProfileForm}
						onSubmit={handleSubmitForm}
					>
						<InputTextReadOnly
							type="text"
							text="Username"
							inputId="username"
							name="username"
							placeholder="Enter Input"
							value={data.username}
							required={true}
						/>
						<InputText
							type="email"
							text="Email"
							inputId="email"
							name="email"
							placeholder="Enter Input"
							value={data.email}
							required={true}
						/>
						<InputText
							type="text"
							text="First Name"
							inputId="fname"
							name="fname"
							placeholder="Enter Input"
							value={data.fname}
							required={true}
						/>
						<InputText
							type="text"
							text="Last Name"
							inputId="lname"
							name="lname"
							placeholder="Enter Input"
							value={data.lname}
							required={true}
						/>
						<InputNumber
							text="Mobile Number"
							inputId="mobilenumber"
							name="mobilenumber"
							placeholder="09XXXXXXXXX"
							negative={false}
							value={parseInt(data.phone_number)}
							required={true}
						/>
						<InputGender value={data.gender} />

						<InputBirthday value={data.birthday} />
					</form>
					<div className={styles.buttonPart}>
						<div>
							<SubmitButton
								text="Sign Up"
								form={styles.editProfileForm}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

async function getUserData() {
	// Fetch the data from the server
	try {
		const response = await fetch("/api/get/user/full", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error:", error);
		return null;
	}
}