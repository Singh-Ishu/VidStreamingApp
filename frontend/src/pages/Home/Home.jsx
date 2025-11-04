import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import styles from "./Home.module.css";
import placeholderPoster from "/placeholderPoster.jpg";

const movieList = [
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
    { id: 1, title: "Inception", posterUrl: placeholderPoster },
];

function Home() {
    return (
        <div className="home-container">
            <h1 className={styles.heading}>ULTFLIX</h1>
            <p className={styles.tagline}>Your Ultimate Movie Experience</p>
            <h2 className={styles.heading2}>Explore Our Collection</h2>
            <MovieCarousel movieList={movieList} />
        </div>
    );
}

export default Home;
