import styles from './page.module.css';
import Button from "@/_components/Button";

export default function Login() {
  return (

    <div className={styles.body}>

        <div className={styles.side}>
        </div>

        <div className="container">
            <div className={styles.main}>
                <div id="header" className={styles.header}>
                    <h1 className="formsTitleFont">Sign In</h1>
                    <p className="formsSubTitleFont">Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>

                <form className={styles.form} action="">
                    <div className={styles.fields}>
                        <div className={styles.formRow}>
                            <label htmlFor="usernameOrEmail" className="formsTextFont">Username/Email</label>
                            <input type="text" id="usernameOrEmail" name="usernameOrEmail" placeholder="Username/Email" className={styles.inputField} required />
                        </div>

                        <div className={styles.formRow}>
                            <label htmlFor="pw" className="formsTextFont">Password</label>
                            <input type="password" id="pw" name="pw" placeholder="••••••••••••••••" className={styles.inputField} required minLength={8} maxLength={24} />
                        </div>
                    </div>
                    
                    <div className={styles.end}>
                        <p className={styles.forgot}>
                            <a className="formSubtitleFont" href="#">Forgot Username/Password?</a>
                        </p>
                        <Button text='Sign In' url='#'/>
                    </div>

                </form>
            </div>
        </div>
    </div>
    



  );
};