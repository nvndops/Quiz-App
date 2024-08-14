import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Admin.module.css'; // Import the CSS module

const Admin = () => {
    const navigate = useNavigate();

    const handleCreateQuiz = () => {
        navigate('/create-quiz');
    };

    const handleManageQuizzes = () => {
        navigate('/all-quizzes');
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>
                Welcome to the Admin Dashboard
            </h2>
            <p className="text-center">
                As an admin, you have the ability to manage and oversee all aspects of the quiz application. 
                Use the options below to create new quizzes or manage existing ones. Ensure that all quizzes are up-to-date 
                and relevant for the best user experience.
            </p>
            <hr />
            <div className={styles.buttonContainer}>
                <button onClick={handleCreateQuiz} className={styles.button}>
                    Create a New Quiz
                </button>
                <button onClick={handleManageQuizzes} className={styles.button}>
                    Manage Existing Quizzes
                </button>
            </div>
        </section>
    );
}

export default Admin;
