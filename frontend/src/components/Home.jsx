// import React from "react"

// const Home = () => {
// 	return (
// 		<main>
// 			<h2 className="mt-5">Welcome to online quiz for everyone</h2>
// 		</main>
// 	)
// }

// export default Home

import React from "react";
import styles from './Home.module.css'; // Import the CSS module

const Home = () => {
    return (
        <main className={styles.container}>
            <h2 className={styles.heading}>Welcome to the Quiz App</h2>
            <p className={styles.description}>
                Dive into a fun and interactive quiz experience. Test your knowledge and challenge yourself!
            </p>
        </main>
    );
}

export default Home;
