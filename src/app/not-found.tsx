"use client";

import React from "react";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.info}>
        <h1 className={styles.title}>404 – Page Not Found</h1>
        <a href="/" className={styles.button}>
          Go Back Home
        </a>
      </main>
    </div>
  );
};

export default NotFoundPage;
