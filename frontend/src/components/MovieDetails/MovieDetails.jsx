import { useEffect } from "react";
import styles from "./MovieDetails.module.css";

function MovieDetails({ movie, isOpen, onClose, onPlay }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !movie) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>

                <div className={styles.movieHeader}>
                    <div className={styles.posterContainer}>
                        <img 
                            src={movie.posterUrl} 
                            alt={movie.title}
                            className={styles.poster}
                        />
                    </div>
                    
                    <div className={styles.movieInfo}>
                        <h1 className={styles.title}>{movie.title}</h1>
                        
                        <div className={styles.metadata}>
                            <span className={styles.year}>{movie.year}</span>
                            <span className={styles.rating}>★ {movie.rating}</span>
                            <span className={styles.genre}>{movie.genre}</span>
                        </div>

                        <p className={styles.description}>
                            {movie.description || "A thrilling cinematic experience that will keep you on the edge of your seat. This masterpiece combines stunning visuals with an compelling storyline that explores the depths of human emotion and adventure."}
                        </p>

                        <div className={styles.actionButtons}>
                            <button 
                                className={styles.playButton}
                                onClick={() => onPlay?.(movie)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                                </svg>
                                Play Now
                            </button>
                            
                            <button className={styles.addToListButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                Add to List
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.additionalInfo}>
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Cast</h3>
                        <p className={styles.sectionContent}>
                            Leonardo DiCaprio, Marion Cotillard, Tom Hardy, Ellen Page, Michael Caine
                        </p>
                    </div>
                    
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Director</h3>
                        <p className={styles.sectionContent}>Christopher Nolan</p>
                    </div>
                    
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionTitle}>Duration</h3>
                        <p className={styles.sectionContent}>148 minutes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;