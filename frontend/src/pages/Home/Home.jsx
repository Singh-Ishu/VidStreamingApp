import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import styles from "./Home.module.css";

const movieList = [
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
    { id: 1, title: "Inception", posterUrl: "/posters/inception.jpg" },
    { id: 2, title: "The Matrix", posterUrl: "/posters/matrix.jpg" },
    { id: 3, title: "Interstellar", posterUrl: "/posters/interstellar.jpg" },
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
