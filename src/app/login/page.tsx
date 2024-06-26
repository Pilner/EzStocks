import styles from "./page.module.css";
import Button from "@/_components/Button";
import Input from "@/_components/Input";

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
                        <div>
                            <Input type="text" name="usernameOrEmail" label="Username/Email" placeholder="Username/Email" required></Input>
                        </div>

                        <div>
                            <Input type="password" name="pw" label="Password" placeholder="••••••••••••••••" minLength={8} maxLength={16} required></Input>
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