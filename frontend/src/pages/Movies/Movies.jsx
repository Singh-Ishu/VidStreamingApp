import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Movies.module.css";
import placeholderPoster from "/placeholderPoster.jpg";

const movieCategories = {
    action: [
        { id: 1, title: "Mad Max: Fury Road", posterUrl: placeholderPoster, year: "2015", rating: "8.1", genre: "Action" },
        { id: 2, title: "John Wick", posterUrl: placeholderPoster, year: "2014", rating: "7.4", genre: "Action" },
        { id: 3, title: "Die Hard", posterUrl: placeholderPoster, year: "1988", rating: "8.2", genre: "Action" },
        { id: 4, title: "Terminator 2", posterUrl: placeholderPoster, year: "1991", rating: "8.5", genre: "Action" },
        { id: 5, title: "The Raid", posterUrl: placeholderPoster, year: "2011", rating: "7.6", genre: "Action" },
        { id: 6, title: "Heat", posterUrl: placeholderPoster, year: "1995", rating: "8.2", genre: "Action" },
    ],
    thriller: [
        { id: 7, title: "Inception", posterUrl: placeholderPoster, year: "2010", rating: "8.8", genre: "Thriller" },
        { id: 8, title: "The Dark Knight", posterUrl: placeholderPoster, year: "2008", rating: "9.0", genre: "Thriller" },
        { id: 9, title: "Se7en", posterUrl: placeholderPoster, year: "1995", rating: "8.6", genre: "Thriller" },
        { id: 10, title: "Zodiac", posterUrl: placeholderPoster, year: "2007", rating: "7.7", genre: "Thriller" },
        { id: 11, title: "Gone Girl", posterUrl: placeholderPoster, year: "2014", rating: "8.1", genre: "Thriller" },
        { id: 12, title: "Shutter Island", posterUrl: placeholderPoster, year: "2010", rating: "8.2", genre: "Thriller" },
    ],
    scifi: [
        { id: 13, title: "The Matrix", posterUrl: placeholderPoster, year: "1999", rating: "8.7", genre: "Sci-Fi" },
        { id: 14, title: "Interstellar", posterUrl: placeholderPoster, year: "2014", rating: "8.6", genre: "Sci-Fi" },
        { id: 15, title: "Blade Runner 2049", posterUrl: placeholderPoster, year: "2017", rating: "8.0", genre: "Sci-Fi" },
        { id: 16, title: "Ex Machina", posterUrl: placeholderPoster, year: "2014", rating: "7.7", genre: "Sci-Fi" },
        { id: 17, title: "Arrival", posterUrl: placeholderPoster, year: "2016", rating: "7.9", genre: "Sci-Fi" },
        { id: 18, title: "Dune", posterUrl: placeholderPoster, year: "2021", rating: "8.0", genre: "Sci-Fi" },
    ],
    horror: [
        { id: 19, title: "Hereditary", posterUrl: placeholderPoster, year: "2018", rating: "7.3", genre: "Horror" },
        { id: 20, title: "The Conjuring", posterUrl: placeholderPoster, year: "2013", rating: "7.5", genre: "Horror" },
        { id: 21, title: "Get Out", posterUrl: placeholderPoster, year: "2017", rating: "7.7", genre: "Horror" },
        { id: 22, title: "A Quiet Place", posterUrl: placeholderPoster, year: "2018", rating: "7.5", genre: "Horror" },
        { id: 23, title: "The Babadook", posterUrl: placeholderPoster, year: "2014", rating: "6.8", genre: "Horror" },
        { id: 24, title: "Midsommar", posterUrl: placeholderPoster, year: "2019", rating: "7.1", genre: "Horror" },
    ]
};

function Movies() {
    const { user } = useAuth();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setIsDetailsOpen(true);
    };

    const handlePlayClick = (movie) => {
        console.log("Play movie:", movie);
    };

    const closeDetails = () => {
        setIsDetailsOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className={styles.moviesContainer}>
            <Navbar />
            
            <main className={styles.mainContent}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Movies</h1>
                    <p className={styles.pageSubtitle}>Discover amazing movies across all genres</p>
                </div>

                <div className={styles.contentSections}>
                    <MovieCarousel 
                        title="Action & Adventure" 
                        movieList={movieCategories.action}
                        onMovieClick={handleMovieClick}
                    />
                    <MovieCarousel 
                        title="Thriller & Suspense" 
                        movieList={movieCategories.thriller}
                        onMovieClick={handleMovieClick}
                    />
                    <MovieCarousel 
                        title="Science Fiction" 
                        movieList={movieCategories.scifi}
                        onMovieClick={handleMovieClick}
                    />
                    <MovieCarousel 
                        title="Horror & Mystery" 
                        movieList={movieCategories.horror}
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

export default Movies;