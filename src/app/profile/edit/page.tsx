import styles from './page.module.css';
import { SubmitButton } from "@/_components/Button";
import { SideNavbar } from '@/_components/semantics/Navbar';
import { InputText, InputNumber, InputGender, InputBirthday } from "@/_components/Input";

export default function ProfileEdit() {
    return (
        <section id={styles.editProfilePage}>
			<SideNavbar />
            <div className={styles.infoPart}>
                <div className="container">
                    <div>
                        <h1 className='formsTitleFont'>Edit Profile</h1>
                    </div>
                    <form id={styles.editProfileForm} action="#" method="post">
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
                    <div className={styles.buttonPart}>
                        <div>
                            <SubmitButton text="Sign Up" form={styles.editProfileForm} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
