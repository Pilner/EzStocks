import styles from "./page.module.css";
import { SideNavbar } from "@/_components/semantics/Navbar";
import Button from "@/_components/Button";

export default function Inventory() {
    return (
        <section id={styles.inventory}>
            <SideNavbar />
            <div className={styles.inventoryList}>
                <div className={styles.title}>
                     <h1 className="sectionTitleFont">All Items</h1>
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
                            <td colSpan={6}><Button text="Add Item" url="/inventory/addItem" /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>
    )

}
