import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const featuredMovies = [
    {
        id: 1,
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        backdrop: "/placeholderPoster.jpg",
        year: "2010",
        rating: "8.8",
        genre: "Sci-Fi, Thriller"
    },
    {
        id: 2,
        title: "The Matrix",
        description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
        backdrop: "/placeholderPoster.jpg",
        year: "1999",
        rating: "8.7",
        genre: "Action, Sci-Fi"
    },
    {
        id: 3,
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        backdrop: "/placeholderPoster.jpg",
        year: "2014",
        rating: "8.6",
        genre: "Adventure, Drama, Sci-Fi"
    }
];

function Hero({ onPlayClick, onInfoClick }) {
    const [currentMovie, setCurrentMovie] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const movie = featuredMovies[currentMovie];

    return (
        <div className={styles.heroContainer}>
            <div className={styles.backgroundImage}>
                <img 
                    src={movie.backdrop} 
                    alt={movie.title}
                    className={styles.backdrop}
                />
                <div className={styles.gradient}></div>
            </div>
            
            <div className={styles.heroContent}>
                <div className={styles.movieInfo}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <div className={styles.metadata}>
                        <span className={styles.year}>{movie.year}</span>
                        <span className={styles.rating}>★ {movie.rating}</span>
                        <span className={styles.genre}>{movie.genre}</span>
                    </div>
                    <p className={styles.description}>{movie.description}</p>
                    
                    <div className={styles.actionButtons}>
                        <button 
                            className={styles.playButton}
                            onClick={() => onPlayClick?.(movie)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M8 5v14l11-7z" fill="currentColor"/>
                            </svg>
                            Play Now
                        </button>
                        <button 
                            className={styles.infoButton}
                            onClick={() => onInfoClick?.(movie)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
                            </svg>
                            More Info
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.indicators}>
                {featuredMovies.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentMovie ? styles.active : ''}`}
                        onClick={() => setCurrentMovie(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hero;