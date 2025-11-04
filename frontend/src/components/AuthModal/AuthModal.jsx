import { useState } from "react";
import styles from "./AuthModal.module.css";

function AuthModal({ mode, onClose, onSwitchMode }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        onClose();
    };

    const switchToLogin = () => onSwitchMode("login");
    const switchToSignup = () => onSwitchMode("signup");

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>
                        {mode === "login" ? "Welcome Back" : "Join ULTFLIX"}
                    </h2>
                    <p className={styles.modalSubtitle}>
                        {mode === "login" 
                            ? "Sign in to your account" 
                            : "Create your account to get started"
                        }
                    </p>
                </div>

                <form className={styles.authForm} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    {mode === "signup" && (
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={styles.input}
                                required
                            />
                        </div>
                    )}

                    <button type="submit" className={styles.submitButton}>
                        {mode === "login" ? "Sign In" : "Create Account"}
                    </button>
                </form>

                <div className={styles.switchMode}>
                    {mode === "login" ? (
                        <p>
                            Don't have an account?{" "}
                            <button 
                                type="button" 
                                className={styles.switchButton}
                                onClick={switchToSignup}
                            >
                                Sign up
                            </button>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <button 
                                type="button" 
                                className={styles.switchButton}
                                onClick={switchToLogin}
                            >
                                Sign in
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthModal;