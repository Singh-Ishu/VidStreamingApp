import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import styles from "./Browse.module.css";
import placeholderPoster from "/placeholderPoster.jpg";

const movieCategories = {
    trending: [
        { id: 1, title: "Inception", posterUrl: placeholderPoster, year: "2010", rating: "8.8", genre: "Sci-Fi" },
        { id: 2, title: "The Matrix", posterUrl: placeholderPoster, year: "1999", rating: "8.7", genre: "Action" },
        { id: 3, title: "Interstellar", posterUrl: placeholderPoster, year: "2014", rating: "8.6", genre: "Sci-Fi" },
        { id: 4, title: "The Dark Knight", posterUrl: placeholderPoster, year: "2008", rating: "9.0", genre: "Action" },
        { id: 5, title: "Pulp Fiction", posterUrl: placeholderPoster, year: "1994", rating: "8.9", genre: "Crime" },
        { id: 6, title: "Fight Club", posterUrl: placeholderPoster, year: "1999", rating: "8.8", genre: "Drama" },
    ],
    action: [
        { id: 7, title: "Mad Max: Fury Road", posterUrl: placeholderPoster, year: "2015", rating: "8.1", genre: "Action" },
        { id: 8, title: "John Wick", posterUrl: placeholderPoster, year: "2014", rating: "7.4", genre: "Action" },
        { id: 9, title: "Die Hard", posterUrl: placeholderPoster, year: "1988", rating: "8.2", genre: "Action" },
        { id: 10, title: "Terminator 2", posterUrl: placeholderPoster, year: "1991", rating: "8.5", genre: "Action" },
        { id: 11, title: "The Raid", posterUrl: placeholderPoster, year: "2011", rating: "7.6", genre: "Action" },
        { id: 12, title: "Heat", posterUrl: placeholderPoster, year: "1995", rating: "8.2", genre: "Action" },
    ],
    drama: [
        { id: 13, title: "The Shawshank Redemption", posterUrl: placeholderPoster, year: "1994", rating: "9.3", genre: "Drama" },
        { id: 14, title: "Forrest Gump", posterUrl: placeholderPoster, year: "1994", rating: "8.8", genre: "Drama" },
        { id: 15, title: "The Godfather", posterUrl: placeholderPoster, year: "1972", rating: "9.2", genre: "Drama" },
        { id: 16, title: "Goodfellas", posterUrl: placeholderPoster, year: "1990", rating: "8.7", genre: "Drama" },
        { id: 17, title: "Schindler's List", posterUrl: placeholderPoster, year: "1993", rating: "8.9", genre: "Drama" },
        { id: 18, title: "12 Angry Men", posterUrl: placeholderPoster, year: "1957", rating: "8.9", genre: "Drama" },
    ],
    comedy: [
        { id: 19, title: "The Grand Budapest Hotel", posterUrl: placeholderPoster, year: "2014", rating: "8.1", genre: "Comedy" },
        { id: 20, title: "Groundhog Day", posterUrl: placeholderPoster, year: "1993", rating: "8.0", genre: "Comedy" },
        { id: 21, title: "The Big Lebowski", posterUrl: placeholderPoster, year: "1998", rating: "8.1", genre: "Comedy" },
        { id: 22, title: "Superbad", posterUrl: placeholderPoster, year: "2007", rating: "7.6", genre: "Comedy" },
        { id: 23, title: "Anchorman", posterUrl: placeholderPoster, year: "2004", rating: "7.2", genre: "Comedy" },
        { id: 24, title: "Dumb and Dumber", posterUrl: placeholderPoster, year: "1994", rating: "7.3", genre: "Comedy" },
    ]
};

function Browse() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setIsDetailsOpen(true);
    };

    const handlePlayClick = (movie) => {
        console.log("Play movie:", movie);
        // Navigate to player page or start playback
    };

    const handleInfoClick = (movie) => {
        setSelectedMovie(movie);
        setIsDetailsOpen(true);
    };

    const closeDetails = () => {
        setIsDetailsOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className={styles.browseContainer}>
            <header className={styles.navbar}>
                <div className={styles.navLeft}>
                    <div className={styles.logo}>ULTFLIX</div>
                    <nav className={styles.navLinks}>
                        <a href="#" className={styles.navLink}>Home</a>
                        <a href="#" className={styles.navLink}>Movies</a>
                        <a href="#" className={styles.navLink}>TV Shows</a>
                        <a href="#" className={styles.navLink}>My List</a>
                    </nav>
                </div>
                
                <div className={styles.navRight}>
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    
                    <div className={styles.userMenu}>
                        <span className={styles.userName}>{user?.name}</span>
                        <button className={styles.logoutBtn} onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className={styles.mainContent}>
                <Hero 
                    onPlayClick={handlePlayClick}
                    onInfoClick={handleInfoClick}
                />
                
                <div className={styles.contentSections}>
                    <MovieCarousel 
                        title="Trending Now" 
                        movieList={movieCategories.trending}
                        onMovieClick={handleMovieClick}
                    />
                    <MovieCarousel 
                        title="Action & Adventure" 
                        movieList={movieCategories.action}
                        onMovieClick={handleMovieClick}
                    />
                    <MovieCarousel 
                        title="Drama" 
                        movieList={movieCategories.drama}
                        onMovieClick={handleMovieClick}
                    />
                    <MovieCarousel 
                        title="Comedy" 
                        movieList={movieCategories.comedy}
                        onMovieClick={handleMovieClick}
                    />
                </div>
            </main>

            <MovieDetails 
                movie={selectedMovie}
                isOpen={isDetailsOpen}
                onClose={closeDetails}
                onPlay={handlePlayClick}
            />
        </div>
    );
}

export default Browse;