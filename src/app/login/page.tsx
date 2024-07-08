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
                        <h1 className='formsTitleFont'>Sign In</h1>
                        <p className="formsSubtitleFont">Don&apos;t have an account? <Link href="/signup">Sign Up</Link></p>
                    </div>
                    <form id={styles.loginForm} action="#" method="GET">
                        <InputText type="text" text="Username" inputId="username" name="username" placeholder="Enter Input" required={true}  />
                        <InputText type="password" text="Password" inputId="password" name="password" placeholder="Enter Input" required={true}  />
                    </form>
                    <div className={styles.termsConditionPart}>
                        <div>
                            <Link href="/login/forgot">Forgot password?</Link>
                        </div>
                        <SubmitButton text="Sign Up" form={styles.loginForm} />
                    </div>
                </div>

            </div>
        </section>
    );
};
