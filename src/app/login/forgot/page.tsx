import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { SubmitButton } from "@/_components/Button";
import { InputText } from "@/_components/Input";

export default function Login() {
    return (
        <section id={styles.loginPage}>
            <div className={styles.designPart}>
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
                        objectPosition: "30% 50%"
                    }}
                    unoptimized={true}
                />
            </div>
            <div className={styles.infoPart}>
                <div className="container">
                    <div>
                        <h1 className='formsTitleFont'>Forgot Password</h1>
                        <p className="formsSubtitleFont">Return back to <Link href="/login">Login</Link></p>
                    </div>
                    <form id={styles.forgotForm} action="#" method="POST">
                        <InputText
                            type="email"
                            text="Enter your email"
                            inputId="username"
                            name="username"
                            placeholder="Enter Input"
                            required={true}
                        />
                    </form>
                    <div className={styles.termsConditionPart}>
                        <SubmitButton text="Reset Password" form={styles.forgotForm} />
                    </div>
                </div>

            </div>
        </section>
    );
};
