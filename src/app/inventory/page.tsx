'use client';

import { useEffect, useState, useRef, FormEvent } from "react";

import { useSession } from "next-auth/react";

import styles from "./page.module.css";
import { SideNavbar } from "@/_components/semantics/Navbar";
import { FunctionButton, SubmitButton } from "@/_components/Button";
import { InputText } from "@/_components/Input";

interface SessionUser {
	id?: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
}

export default function Inventory() {

	// useRef to get the addItems div
	const addItemsRef = useRef(null);
	const mainPageRef = useRef(null);
	
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		getInventoryData().then((data) => {
			setData(data);
		});
	}, []);

    function showAddItems() {
        if (addItemsRef.current && mainPageRef.current) {
            (addItemsRef.current as HTMLDivElement).classList.add(`${styles.active}`);
			(mainPageRef.current as HTMLDivElement).classList.add(`${styles.inactive}`);
        }
    }

	function hideAddItems() {
		if (addItemsRef.current && mainPageRef.current) {
			(addItemsRef.current as HTMLDivElement).classList.remove(`${styles.active}`);
			(mainPageRef.current as HTMLDivElement).classList.remove(`${styles.inactive}`);
		}
	}

	async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		// Prevent the form from submitting
		e.preventDefault();

		// Get the form data
		let formData = new FormData(e.currentTarget);

		// Convert the form data to JSON
		let jsonData = JSON.stringify(Object.fromEntries(formData));


		// Send the data to the server
		fetch("/api/inventory/add", {
			method: "POST",
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
					getInventoryData().then((data) => {
						setData(data);
					});

					if (addItemsRef.current && mainPageRef.current) {
						(
							addItemsRef.current as HTMLDivElement
						).classList.remove(`${styles.active}`);
						(
							mainPageRef.current as HTMLDivElement
						).classList.remove(`${styles.inactive}`);
					}

					// Clear the form
					(e.target as HTMLFormElement).reset();
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}



    return (
		<section id={styles.inventory}>
			<div className={styles.mainPage} ref={mainPageRef}>
				<SideNavbar />
				<div className={styles.inventoryList}>
					<div className={styles.title}>
						<div>
							<h1 className="sectionTitleFont">All Items</h1>
						</div>
						<FunctionButton text="Add Item" onClick={showAddItems} />
					</div>
					<div>
						<div className={styles.inventoryInfo}>
							<div>
								<p className="heroSubTitleFont">Total Items: {(data != null) ? data.rows.length : 0}</p>
							</div>
							<div>
								<p className="heroSubTitleFont">
									Total Categories: 3
								</p>
							</div>
						</div>
						<table>
							<thead>
								<tr>
									<th>Product Name</th>
									<th>Category</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Last Modified</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{(data != null) ? (
									(data.rows.length > 0) ? 
										data.rows.map((item: any) => {
											return (
												<tr
													key={item.Products.inventory_id}
												>
													<td>
														{item.Products.product_name}
													</td>
													<td>
														{item.Products.category}
														</td>
													<td>
														₱{(item.Products.product_price).toFixed(2)}
													</td>
													<td>
														{item.quantity}
														</td>
													<td>
														{item.updatedAt}
													</td>
													<td>Ok</td>
												</tr>
											);
										}) : (
										<tr>
											<td colSpan={6}>Empty</td>
										</tr>
									)
								) : (
									<tr>
										<td colSpan={6}>Empty</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>

			</div>
			<div className={`${styles.addItems}`} ref={addItemsRef}>
				<div id={styles.closeButton} onClick={hideAddItems}>
					<i className="fa-solid fa-xmark fa-2xl"></i>
				</div>
				<form id={styles.addItemForm} onSubmit={handleFormSubmit} method="POST">
					<InputText
						type="text"
						text="Product Name"
						inputId="productname"
						name="productname"
						placeholder="Enter Product Name"
						required={true}
					/>
					<InputText
						type="text"
						text="Category"
						inputId="category"
						name="category"
						placeholder="Enter Category"
						required={true}
					/>
					<InputText
						type="text"
						text="Price"
						inputId="price"
						name="price"
						placeholder="Enter Price"
						required={true}
					/>
					<InputText
						type="text"
						text="Quantity"
						inputId="quantity"
						name="quantity"
						placeholder="Enter Quantity"
						required={true}
					/>
					<SubmitButton text="Add Item" form={styles.addItemForm} />
				</form>
			</div>
		</section>
	);

}

async function getInventoryData() {
	// Fetch the data from the server
	try {
		const response = await fetch("/api/inventory/get", {
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