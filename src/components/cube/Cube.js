import React, { useEffect } from 'react';
import styles from './Cube.module.css';
import ScrollReveal from 'scrollreveal';

const Cube = (props) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.cube}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.cube}>
      <div className={styles.square}>
        <div className={styles.checkmark}>✔</div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
      </div>
    </div>
  );
};

export default Cube;
