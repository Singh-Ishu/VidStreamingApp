import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieCarousel.module.css";

function MovieCarousel({ movieList, title, onMovieClick }) {
    const duplicatedMovies = [...movieList, ...movieList];
    
    return (
        <div className={styles.carouselSection}>
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            <div className={styles.carouselContainer}>
                {duplicatedMovies.map((movie, index) => (
                    <div key={`${movie.id}-${index}`} className={styles.movieItem}>
                        <MovieCard movie={movie} onClick={onMovieClick} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieCarousel;
