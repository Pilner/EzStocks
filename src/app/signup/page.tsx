import styles from './page.module.css';
import Button from "@/_components/Button";

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
              <div className={styles.formRow}>
                <div className={styles.formColumn}>
                  <label htmlFor="fname" className="formsTextFont">First Name</label>
                  <input type="text" id="fname" name="fname" placeholder="John" className={styles.inputField} required />
                </div>
                <div className={styles.formColumn}>
                  <label htmlFor="lname" className="formsTextFont">Last Name</label>
                  <input type="text" id="lname" name="lname" placeholder="Doe" className={styles.inputField} required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formColumn}>
                  <label htmlFor="email" className="formsTextFont">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" className={styles.inputField} required />
                </div>
                <div className={styles.formColumn}>
                  <label htmlFor="number" className="formsTextFont">Mobile Number</label>
                  <input type="tel" id="number" name="number" placeholder="09XXXXXXXXX" pattern="[0-9]{11}" className={styles.inputField} required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formColumn}>
                  <label htmlFor="pw" className="formsTextFont">Password</label>
                  <input type="password" id="pw" name="pw" placeholder="••••••••••••••••" className={styles.inputField} required minLength={8} maxLength={24} />
                </div>
                <div className={styles.formColumn}>
                  <label htmlFor="pw-confirm" className="formsTextFont">Confirm Password</label>
                  <input type="password" id="pw-confirm" name="pw-confirm" placeholder="••••••••••••••••" className={styles.inputField} required minLength={8} maxLength={24} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formColumn}>
                  <label htmlFor="gender" className="formsTextFont">Gender</label>
                  <select id="gender" name="gender" className={styles.inputField} required>
                    <option value="" disabled selected>Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="not-prefer">Prefer not to say</option>
                  </select>
                </div>
                <div className={styles.formColumn}>
                  <label htmlFor="birthdate" className="formsTextFont">Date of Birth</label>
                  <input type="date" id="birthdate" name="birthdate" className={styles.inputDate} required />
                </div>
              </div>
            </div>

            <div id="end" className={styles.end}>
              <div id="agreement" className={styles.agreement}>
                <input type="checkbox" id="agreement" name="agreement" required />
                <label htmlFor="agreement" className="formsTextFont">
                  I agree to the <a href="/terms">Terms of Use</a>, <a href="/privacy">Privacy Policy</a>, and <a href="/cookies">Cookies Policy</a>.
                </label>
              </div>
              {/* <div id="submit" className={styles.submit}>
                <button className={styles.submitButton} type="submit">Sign Up</button>
              </div> */}

              <Button text='Sign Up' url='#'/>

              
            </div>
          </form>
      
      </div>
      </div>
    </div>
  );
};

