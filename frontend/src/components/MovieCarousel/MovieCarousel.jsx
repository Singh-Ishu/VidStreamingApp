import styles from "./MovieCarousel.module.css";

function MovieCarousel({ movieList }) {
    return (
        <div className={styles.carouselContainer}>
            {movieList.map((movie) => (
                <div key={movie.id} className={styles.movieItem}>
                    <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className={styles.moviePoster}
                    />
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default MovieCarousel;
