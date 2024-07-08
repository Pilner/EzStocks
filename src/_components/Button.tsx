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

interface FunctionButtonProps {
	text: string;
	onClick: () => void;
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

export function FunctionButton({ text, onClick }: FunctionButtonProps) {
	return (
		<div className={styles.buttonDiv}>
			<button className={styles.roundButton} onClick={onClick}>
				{text}
			</button>
		</div>
	)
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
