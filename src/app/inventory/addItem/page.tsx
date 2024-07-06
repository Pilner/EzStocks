import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import { SubmitButton } from "@/_components/Button";
import styles from "./page.module.css";


export default function AddItem() {
    return (
        <>
            <Navbar />
            <section id={styles.addItemPage}>
                <div className="container">
                    <div className={styles.addForm}>
                        <h1 className="sectionTitleFont">Add Item</h1>
                        <form action="post">
                            <label htmlFor="productname">Product Name</label>
                            <input type="text" name="Product Name" id="productname" required/>
                            <label htmlFor="category">Category</label>
                            <input type="text" name="Category" id="category" required/>
                            <label htmlFor="price">Price</label>
                            <input type="number" min={1} step={0.01} name="Price" id="price" required/>
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" min={1} step={1} name="Quantity" id="quantity" required/>
                            <SubmitButton text="Add Item" value="Add Item" url="#" />
                        </form>
                    </div>
                </div>
            </section>
			<Footer />
        </>
    )
}
