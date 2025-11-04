import { useState } from "react";
import styles from "./Landing.module.css";
import AuthModal from "../../components/AuthModal/AuthModal";

function Landing() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState("login");

    const openLoginModal = () => {
        setAuthMode("login");
        setIsAuthModalOpen(true);
    };

    const openSignupModal = () => {
        setAuthMode("signup");
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    return (
        <div className={styles.landingContainer}>
            <header className={styles.header}>
                <div className={styles.logo}>ULTFLIX</div>
                <div className={styles.authButtons}>
                    <button 
                        className={styles.loginBtn} 
                        onClick={openLoginModal}
                    >
                        Sign In
                    </button>
                    <button 
                        className={styles.signupBtn} 
                        onClick={openSignupModal}
                    >
                        Get Started
                    </button>
                </div>
            </header>

            <main className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Unlimited movies, TV shows, and more
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Watch anywhere. Cancel anytime.
                    </p>
                    <button 
                        className={styles.ctaButton}
                        onClick={openSignupModal}
                    >
                        Start Watching
                    </button>
                </div>
            </main>

            <section className={styles.features}>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>📱</div>
                    <h3 className={styles.featureTitle}>Watch everywhere</h3>
                    <p className={styles.featureText}>
                        Stream on your phone, tablet, laptop, and TV
                    </p>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>⬇️</div>
                    <h3 className={styles.featureTitle}>Download your shows</h3>
                    <p className={styles.featureText}>
                        Watch offline on your mobile devices
                    </p>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>👥</div>
                    <h3 className={styles.featureTitle}>Create profiles</h3>
                    <p className={styles.featureText}>
                        Send kids on adventures with their favorite characters
                    </p>
                </div>
            </section>

            {isAuthModalOpen && (
                <AuthModal 
                    mode={authMode}
                    onClose={closeAuthModal}
                    onSwitchMode={setAuthMode}
                />
            )}
        </div>
    );
}

export default Landing;