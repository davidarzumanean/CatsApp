import React from 'react';
import styles from'./Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.track}>
        <div className={styles.mouse} />
      </div>
      <div className={styles.face}>
        <div className={styles.earsContainer} />
        <div className={styles.eyesContainer}>
          <div className={styles.eye} />
          <div className={styles.eye} />
        </div>
        <div className={styles.phiz}>
          <div className={styles.nose} />
          <div className={styles.lip} />
          <div className={styles.mouth} />
        </div>
      </div>
    </div>
  )
}

export default Loader;
