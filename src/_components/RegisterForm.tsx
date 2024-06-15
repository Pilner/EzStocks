import React from 'react';
import styles from '../styles/Register.module.css';

const RegisterForm: React.FC = () => {
  return (
    <div id="main" className={styles.main}>
      <div id="header" className={styles.header}>
        <h1>Sign Up</h1>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
      
      <form action="">
        <div className={styles.fields}>
          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="fname" placeholder="John" required />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lname" placeholder="Doe" required />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" required />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="number">Mobile Number</label>
              <input type="tel" id="number" name="number" placeholder="09XXXXXXXXX" pattern="[0-9]{11}" required />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label htmlFor="pw">Password</label>
              <input type="password" id="pw" name="pw" placeholder="••••••••••••••••" required minLength={8} maxLength={24} />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="pw-confirm">Confirm Password</label>
              <input type="password" id="pw-confirm" name="pw-confirm" placeholder="••••••••••••••••" required minLength={8} maxLength={24} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="" disabled selected>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Custom">Custom</option>
                <option value="not-prefer">Prefer not to say</option>
              </select>
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="birthdate">Date of Birth</label>
              <input type="date" id="birthdate" name="birthdate" required />
            </div>
          </div>
        </div>

        <div id="end" className={styles.end}>
          <div id="agreement" className={styles.agreement}>
            <input type="checkbox" id="agreement" name="agreement" required />
            <label htmlFor="agreement">
              I agree to the <a href="/terms">Terms of Use</a>, <a href="/privacy">Privacy Policy</a>, and <a href="/cookies">Cookies Policy</a>.
            </label>
          </div>
          <div id="submit" className={styles.submit}>
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
