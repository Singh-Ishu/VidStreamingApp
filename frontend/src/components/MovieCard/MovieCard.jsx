import { useState } from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ movie, onClick }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles.movieCard} onClick={() => onClick?.(movie)}>
            <div className={styles.imageContainer}>
                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className={`${styles.moviePoster} ${imageLoaded ? styles.loaded : ''}`}
                    onLoad={() => setImageLoaded(true)}
                />
                <div className={styles.overlay}>
                    <div className={styles.playButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5v14l11-7z" fill="currentColor"/>
                        </svg>
                    </div>
                    <div className={styles.movieInfo}>
                        <h3 className={styles.movieTitle}>{movie.title}</h3>
                        <div className={styles.movieMeta}>
                            <span className={styles.year}>{movie.year || "2024"}</span>
                            <span className={styles.rating}>★ {movie.rating || "8.5"}</span>
                        </div>
                        <p className={styles.genre}>{movie.genre || "Action, Thriller"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;