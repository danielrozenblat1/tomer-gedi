import React from 'react';
import styles from './Step.module.css';

const LessonBubble = ({ lessonNumber, title, description }) => {
  return (
    <div className={styles.bubble}>
      <div className={styles.lessonNumber}>{lessonNumber}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default LessonBubble;