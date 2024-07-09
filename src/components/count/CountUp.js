import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from "./CountUp.module.css";

const CountingUp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.row}>
 

      <div className={styles.font}>
        {inView && <CountUp end={100} duration={4.5} />}
        <div className={styles.explain}>תלמידות שעברו את הקורס הבוטיק שלי</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={50} duration={5} />}
        <div className={styles.explain}>בנות שעברו השתלמות אצלי</div>
      </div>

      <div className={styles.font}>
        {inView && <CountUp end={700} duration={3.5} />}
        <div className={styles.explain}>לקוחות שעברו דרכי</div>
      </div>
    </div>
    
  );
};

export default CountingUp;