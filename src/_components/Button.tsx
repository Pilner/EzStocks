import Link from "next/link";
import styles from "./styles/Button.module.css";

interface ButtonProps {
	text: string;
	url: string;
}

interface SubmitButtonProps { 
    text: string;
	form: string;
}

export default function Button({ text, url }: ButtonProps) {
	return (
		<div className={styles.buttonDiv}>
			<Link href={url} scroll={false}>
				<button className={styles.roundButton}>
                    {text}
                </button>
			</Link>
		</div>
	);
}

export function SubmitButton({ text, form }: SubmitButtonProps) {
    return (

        <div className={styles.buttonDiv}>
            <button type="submit" className={styles.roundButton} form={form}>
                {text}
            </button>
        </div>
    )
}
