import Link from "next/link";
import styles from "./styles/Button.module.css";

interface ButtonProps {
	text: string;
	url: string;
}

export default function Button({ text, url }: ButtonProps) {
	return (
		<div className={styles.buttonDiv}>
			<Link href={url} scroll={false}>
				<button className={styles.roundButton}>{text}</button>
			</Link>
		</div>
	);
}
