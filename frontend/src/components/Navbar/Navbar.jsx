import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Search for:", searchQuery);
            // Implement search functionality
        }
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.navLeft}>
                <div className={styles.logo} onClick={() => navigate("/home")}>
                    ULTFLIX
                </div>
                <nav className={styles.navLinks}>
                    <button 
                        className={`${styles.navLink} ${isActive("/home") ? styles.active : ""}`}
                        onClick={() => navigate("/home")}
                    >
                        Home
                    </button>
                    <button 
                        className={`${styles.navLink} ${isActive("/movies") ? styles.active : ""}`}
                        onClick={() => navigate("/movies")}
                    >
                        Movies
                    </button>
                    <button 
                        className={`${styles.navLink} ${isActive("/tv-shows") ? styles.active : ""}`}
                        onClick={() => navigate("/tv-shows")}
                    >
                        TV Shows
                    </button>
                    <button 
                        className={`${styles.navLink} ${isActive("/my-list") ? styles.active : ""}`}
                        onClick={() => navigate("/my-list")}
                    >
                        My List
                    </button>
                </nav>
            </div>
            
            <div className={styles.navRight}>
                <form className={styles.searchContainer} onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search movies, shows..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        className={`${styles.searchInput} ${isSearchFocused ? styles.focused : ""}`}
                    />
                    <button type="submit" className={styles.searchButton}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
                
                <div className={styles.userMenu}>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{user?.name}</span>
                        <div className={styles.userAvatar}>
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                    </div>
                    <button className={styles.logoutBtn} onClick={handleLogout}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;