import Link from 'next/link';
import styles from './page.module.css';
import { SubmitButton } from "@/_components/Button";
import { InputText } from "@/_components/Input";

export default function Login() {
    return (
        <section id={styles.loginPage}>
            <div className={styles.designPart}></div>
            <div className={styles.infoPart}>
                <div className="container">
                    <div>
                        <h1 className='formsTitleFont'>Sign In</h1>
                        <p className="formsSubtitleFont">Don&apos;t have an account? <Link href="/signup">Sign Up</Link></p>
                    </div>
                    <form id={styles.loginForm} action="#" method="GET">
                        <InputText type="text" text="Username" inputId="username" name="username" placeholder="Enter Input" required={true}  />
                        <InputText type="password" text="Password" inputId="password" name="password" placeholder="Enter Input" required={true}  />
                    </form>
                    <div className={styles.termsConditionPart}>
                        <div>
                            <Link href="#">Forgot password?</Link>
                        </div>
                        <SubmitButton text="Sign Up" form={styles.loginForm} />
                    </div>
                </div>

            </div>
        </section>
    );
};
