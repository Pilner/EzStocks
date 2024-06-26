import styles from './page.module.css';
import Button from "@/_components/Button";
import Input from "@/_components/Input";

export default function Register() {
  return (
      <div className={styles.body}>
        <div className={styles.side}>
        </div>

        <div className="container">
          <div id="main" className={styles.main}>
            <div id="header" className={styles.header}>
              <h1 className="formsTitleFont">Sign Up</h1>
              <p className="formsSubTitleFont">Already have an account? <a href="/login">Login</a></p>
            </div>
          
          <form className={styles.form} action="">
            <div className={styles.fields}>
              <div>

                <div className={styles.formRow}>
                  <Input type="text" name="username" label="Username" placeholder="johndoe" required></Input>
                  <Input type="text" name="name" label="Full Name" placeholder="John Doe" required></Input>
                </div>

                <div className={styles.formRow}>
                  <Input type="email" name="email" label="Email" placeholder="johndoe@gmail.com" required></Input>
                  <Input type="text" name="number" label="number" placeholder="09XXXXXXXXX" required></Input>
                </div>

                <div className={styles.formRow}>
                  <Input type="password" name="pw" label="Password" placeholder="••••••••••••••••" required></Input>
                  <Input type="password" name="pwConfirm" label="Confirm Password" placeholder="••••••••••••••••" required></Input>
                </div>

                <div className={styles.formRow}>

                  <Input type="select" name="gender" label="Gender" placeholder="Select Gender"
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' },
                    { value: 'not-prefer', label: 'Prefer not to say' }
                  ]}
                  required></Input>

                  <Input type="date" name="birthdate" label="Date of Birth" required></Input>

                </div>
              </div>
            </div>

            <div id="end" className={styles.end}>
              <div id="agreement" className={styles.agreement}>
                <input type="checkbox" id="agreement" name="agreement" required />
                <label htmlFor="agreement" className="formsTextFont">
                  I agree to the <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>.
                </label>
              </div>

              <Button text='Sign Up' url='#'/>

              
            </div>
          </form>
      
      </div>
      </div>
    </div>
  );
};

