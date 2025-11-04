import styles from "./Header.module.css";

function Header({ onLoginClick, onSignupClick, showAuthButtons = true }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ULTFLIX</div>
            {showAuthButtons && (
                <div className={styles.authButtons}>
                    <button 
                        className={styles.loginBtn} 
                        onClick={onLoginClick}
                    >
                        Sign In
                    </button>
                    <button 
                        className={styles.signupBtn} 
                        onClick={onSignupClick}
                    >
                        Get Started
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;