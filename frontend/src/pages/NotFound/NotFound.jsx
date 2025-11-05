import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Page Not Found</h2>
                <p className={styles.message}>
                    The page you're looking for doesn't exist.
                </p>
                <Link to="/" className={styles.homeLink}>
                    Go Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;