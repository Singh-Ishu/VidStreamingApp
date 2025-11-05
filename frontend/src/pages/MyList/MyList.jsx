import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./MyList.module.css";
import placeholderPoster from "/placeholderPoster.jpg";

// Mock user's saved list
const userList = [
    { id: 1, title: "Inception", posterUrl: placeholderPoster, year: "2010", rating: "8.8", genre: "Sci-Fi" },
    { id: 2, title: "The Dark Knight", posterUrl: placeholderPoster, year: "2008", rating: "9.0", genre: "Action" },
    { id: 3, title: "Interstellar", posterUrl: placeholderPoster, year: "2014", rating: "8.6", genre: "Sci-Fi" },
    { id: 4, title: "Breaking Bad", posterUrl: placeholderPoster, year: "2008", rating: "9.5", genre: "Drama" },
    { id: 5, title: "The Matrix", posterUrl: placeholderPoster, year: "1999", rating: "8.7", genre: "Action" },
    { id: 6, title: "Pulp Fiction", posterUrl: placeholderPoster, year: "1994", rating: "8.9", genre: "Crime" },
];

function MyList() {
    const { user } = useAuth();
    const [selectedItem, setSelectedItem] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [list, setList] = useState(userList);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsDetailsOpen(true);
    };

    const handlePlayClick = (item) => {
        console.log("Play item:", item);
    };

    const handleRemoveFromList = (itemId) => {
        setList(prevList => prevList.filter(item => item.id !== itemId));
    };

    const closeDetails = () => {
        setIsDetailsOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className={styles.myListContainer}>
            <Navbar />
            
            <main className={styles.mainContent}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>My List</h1>
                    <p className={styles.pageSubtitle}>
                        {list.length > 0 
                            ? `${list.length} items in your watchlist`
                            : "Your watchlist is empty"
                        }
                    </p>
                </div>

                <div className={styles.listContent}>
                    {list.length > 0 ? (
                        <div className={styles.gridContainer}>
                            {list.map((item) => (
                                <div key={item.id} className={styles.listItem}>
                                    <MovieCard 
                                        movie={item} 
                                        onClick={handleItemClick}
                                    />
                                    <button 
                                        className={styles.removeButton}
                                        onClick={() => handleRemoveFromList(item.id)}
                                        title="Remove from list"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h2 className={styles.emptyTitle}>Your list is empty</h2>
                            <p className={styles.emptyDescription}>
                                Start adding movies and TV shows to create your personal watchlist
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <MovieDetails 
                movie={selectedItem}
                isOpen={isDetailsOpen}
                onClose={closeDetails}
                onPlay={handlePlayClick}
            />
        </div>
    );
}

export default MyList;