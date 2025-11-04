import styles from "./Home.module.css";

function Home() {
    return (
        <div className="home-container">
            <h1 className={styles.heading}>ULTFLIX</h1>
            <p className={styles.tagline}>Your Ultimate Movie Experience</p>
        </div>
    );
}

export default Home;
