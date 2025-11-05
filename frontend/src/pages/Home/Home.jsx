import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import styles from "./Home.module.css";
import placeholderPoster from "/placeholderPoster.jpg";

const movieList = [
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 2, title: "The Matrix", posterUrl: placeholderPoster },
    { id: 3, title: "Interstellar", posterUrl: placeholderPoster },
    { id: 4, title: "The Dark Knight", posterUrl: placeholderPoster },
    { id: 5, title: "Pulp Fiction", posterUrl: placeholderPoster },
    { id: 6, title: "Fight Club", posterUrl: placeholderPoster },
    { id: 7, title: "Forrest Gump", posterUrl: placeholderPoster },
    { id: 8, title: "The Godfather", posterUrl: placeholderPoster },
    { id: 9, title: "Goodfellas", posterUrl: placeholderPoster },
    { id: 10, title: "The Shawshank Redemption", posterUrl: placeholderPoster },
];

function Home() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className={styles.homeContainer}>
            <header className={styles.homeHeader}>
                <div className={styles.logo}>ULTFLIX</div>
                <div className={styles.userSection}>
                    <span className={styles.welcomeText}>Welcome, {user?.name}</span>
                    <button className={styles.logoutBtn} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>
            
            <main className={styles.mainContent}>
                <h1 className={styles.heading}>ULTFLIX</h1>
                <p className={styles.tagline}>Your Ultimate Movie Experience</p>
                <h2 className={styles.heading2}>Explore Our Collection</h2>
                <MovieCarousel movieList={movieList} />
            </main>
        </div>
    );
}

export default Home;
