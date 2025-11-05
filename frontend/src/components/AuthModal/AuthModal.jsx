import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./AuthModal.module.css";

function AuthModal({ mode, onClose, onSwitchMode }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const { login, signup } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            let result;
            if (mode === "login") {
                result = await login(formData.email, formData.password);
            } else {
                result = await signup(formData.email, formData.password, formData.confirmPassword);
            }

            if (result.success) {
                onClose();
                navigate("/home");
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
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
                    {error && (
                        <div className={styles.errorMessage}>
                            {error}
                        </div>
                    )}

                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.input}
                            required
                            disabled={loading}
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
                            disabled={loading}
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
                                disabled={loading}
                            />
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={loading}
                    >
                        {loading ? "Please wait..." : (mode === "login" ? "Sign In" : "Create Account")}
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