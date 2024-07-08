import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { SubmitButton } from "@/_components/Button";
import { InputText, InputNumber, InputGender, InputBirthday } from "@/_components/Input";

export default function Register() {
    let githubLink = "https://github.com/Pilner/EzStocks";
    return (
        <section id={styles.registerPage}>
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
                        <h1 className='formsTitleFont'>Sign Up</h1>
                        <p className="formsSubtitleFont">Already have an account? <Link href="/login">Login</Link></p>
                    </div>
                    <form id={styles.registerForm} action="#" method="post">
                        <InputText type="text"  text="Username" inputId="username" name="username" placeholder="Enter Input" required={true}  />
                        <InputText type="email"  text="Email" inputId="email" name="email" placeholder="Enter Input" required={true}  />
                        <InputText type="text"  text="First Name" inputId="fname" name="fname" placeholder="Enter Input" required={true}  />
                        <InputText type="text"  text="Last Name" inputId="lname" name="lname" placeholder="Enter Input" required={true}  />
                        <InputNumber text="Mobile Number" inputId="mobilenumber" name="mobilenumber" placeholder="09XXXXXXXXX" negative={false} required={true}  />
                        <InputText type="password"  text="Password" inputId="password1" name="password1" placeholder="••••••••••••••••" required={true}  />
                        <InputText type="password"  text="Confirm Password" inputId="password2" name="password2" placeholder="••••••••••••••••" required={true}  />
                        <InputGender />

                        <InputBirthday />
                    </form>
                    <div className={styles.termsConditionPart}>
                        <div>
                            <input className="bodyTextFont" type="checkbox" name="terms" id="terms" required />
                            <label htmlFor="terms" className="termsText">I agree to the <Link href={githubLink}>Terms of Use</Link>, <Link href={githubLink}>Privacy Policy</Link> and <Link href={githubLink}>Cookies Policy</Link>.</label>
                        </div>
                        <div>
                            <SubmitButton text="Sign Up" form={styles.registerForm} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
