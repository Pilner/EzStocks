'use client';

import { useEffect, useRef } from "react";

import styles from "./page.module.css";
import { SideNavbar } from "@/_components/semantics/Navbar";
import { FunctionButton, SubmitButton } from "@/_components/Button";
import { InputText } from "@/_components/Input";

export default function Inventory() {

	// useRef to get the addItems div
	const addItemsRef = useRef(null);
	const mainPageRef = useRef(null);


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
								<p className="heroSubTitleFont">Total Items: 10</p>
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
								<tr>
									<td>Downey</td>
									<td>Laundry</td>
									<td>P9.99</td>
									<td>999</td>
									<td>12/04/23</td>
									<td>Ok</td>
								</tr>
								<tr>
									<td>Downey</td>
									<td>Laundry</td>
									<td>P9.99</td>
									<td>999</td>
									<td>12/04/23</td>
									<td>Ok</td>
								</tr>
								<tr>
									<td>Downey</td>
									<td>Laundry</td>
									<td>P9.99</td>
									<td>999</td>
									<td>12/04/23</td>
									<td>Ok</td>
								</tr>
								<tr>
									<td>Downey</td>
									<td>Laundry</td>
									<td>P9.99</td>
									<td>999</td>
									<td>12/04/23</td>
									<td>Ok</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

			</div>
			<div className={`${styles.addItems}`} ref={addItemsRef}>
				<div id={styles.closeButton} onClick={hideAddItems}>
					<i className="fa-solid fa-xmark fa-2xl"></i>
				</div>
				<form id={styles.addItemForm} action="#" method="POST">
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
