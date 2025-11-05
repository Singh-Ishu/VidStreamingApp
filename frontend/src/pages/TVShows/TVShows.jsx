import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TVShows.module.css";
import placeholderPoster from "/placeholderPoster.jpg";

const tvShowCategories = {
    trending: [
        { id: 1, title: "Breaking Bad", posterUrl: placeholderPoster, year: "2008", rating: "9.5", genre: "Drama" },
        { id: 2, title: "Game of Thrones", posterUrl: placeholderPoster, year: "2011", rating: "9.3", genre: "Fantasy" },
        { id: 3, title: "The Sopranos", posterUrl: placeholderPoster, year: "1999", rating: "9.2", genre: "Crime" },
        { id: 4, title: "The Wire", posterUrl: placeholderPoster, year: "2002", rating: "9.3", genre: "Crime" },
        { id: 5, title: "Better Call Saul", posterUrl: placeholderPoster, year: "2015", rating: "8.8", genre: "Drama" },
        { id: 6, title: "Stranger Things", posterUrl: placeholderPoster, year: "2016", rating: "8.7", genre: "Sci-Fi" },
    ],
    drama: [
        { id: 7, title: "Mad Men", posterUrl: placeholderPoster, year: "2007", rating: "8.6", genre: "Drama" },
        { id: 8, title: "The Crown", posterUrl: placeholderPoster, year: "2016", rating: "8.7", genre: "Drama" },
        { id: 9, title: "House of Cards", posterUrl: placeholderPoster, year: "2013", rating: "8.7", genre: "Drama" },
        { id: 10, title: "Succession", posterUrl: placeholderPoster, year: "2018", rating: "8.8", genre: "Drama" },
        { id: 11, title: "The West Wing", posterUrl: placeholderPoster, year: "1999", rating: "8.8", genre: "Drama" },
        { id: 12, title: "Ozark", posterUrl: placeholderPoster, year: "2017", rating: "8.4", genre: "Drama" },
    ],
    comedy: [
        { id: 13, title: "The Office", posterUrl: placeholderPoster, year: "2005", rating: "8.9", genre: "Comedy" },
        { id: 14, title: "Friends", posterUrl: placeholderPoster, year: "1994", rating: "8.9", genre: "Comedy" },
        { id: 15, title: "Parks and Recreation", posterUrl: placeholderPoster, year: "2009", rating: "8.6", genre: "Comedy" },
        { id: 16, title: "Brooklyn Nine-Nine", posterUrl: placeholderPoster, year: "2013", rating: "8.4", genre: "Comedy" },
        { id: 17, title: "Arrested Development", posterUrl: placeholderPoster, year: "2003", rating: "8.7", genre: "Comedy" },
        { id: 18, title: "Community", posterUrl: placeholderPoster, year: "2009", rating: "8.5", genre: "Comedy" },
    ],
    scifi: [
        { id: 19, title: "Black Mirror", posterUrl: placeholderPoster, year: "2011", rating: "8.8", genre: "Sci-Fi" },
        { id: 20, title: "Westworld", posterUrl: placeholderPoster, year: "2016", rating: "8.6", genre: "Sci-Fi" },
        { id: 21, title: "The Expanse", posterUrl: placeholderPoster, year: "2015", rating: "8.5", genre: "Sci-Fi" },
        { id: 22, title: "Lost", posterUrl: placeholderPoster, year: "2004", rating: "8.3", genre: "Sci-Fi" },
        { id: 23, title: "Dark", posterUrl: placeholderPoster, year: "2017", rating: "8.8", genre: "Sci-Fi" },
        { id: 24, title: "Altered Carbon", posterUrl: placeholderPoster, year: "2018", rating: "8.0", genre: "Sci-Fi" },
    ]
};

function TVShows() {
    const { user } = useAuth();
    const [selectedShow, setSelectedShow] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleShowClick = (show) => {
        setSelectedShow(show);
        setIsDetailsOpen(true);
    };

    const handlePlayClick = (show) => {
        console.log("Play show:", show);
    };

    const closeDetails = () => {
        setIsDetailsOpen(false);
        setSelectedShow(null);
    };

    return (
        <div className={styles.tvShowsContainer}>
            <Navbar />
            
            <main className={styles.mainContent}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>TV Shows</h1>
                    <p className={styles.pageSubtitle}>Binge-watch the best series and shows</p>
                </div>

                <div className={styles.contentSections}>
                    <MovieCarousel 
                        title="Trending Shows" 
                        movieList={tvShowCategories.trending}
                        onMovieClick={handleShowClick}
                    />
                    <MovieCarousel 
                        title="Drama Series" 
                        movieList={tvShowCategories.drama}
                        onMovieClick={handleShowClick}
                    />
                    <MovieCarousel 
                        title="Comedy Shows" 
                        movieList={tvShowCategories.comedy}
                        onMovieClick={handleShowClick}
                    />
                    <MovieCarousel 
                        title="Sci-Fi & Fantasy" 
                        movieList={tvShowCategories.scifi}
                        onMovieClick={handleShowClick}
                    />
                </div>
            </main>

            <MovieDetails 
                movie={selectedShow}
                isOpen={isDetailsOpen}
                onClose={closeDetails}
                onPlay={handlePlayClick}
            />
        </div>
    );
}

export default TVShows;