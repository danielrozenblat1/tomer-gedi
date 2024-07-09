import { useEffect } from "react";
import Cube from "../components/cube/Cube"
import FormScreen from "../components/form/FormScreen"
import styles from "./FifthScreen.module.css"
import ScrollReveal from "scrollreveal";
const FifthScreen=()=>{
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.title}`, {
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
        ScrollReveal().reveal(`.${styles.subTitle}`, {
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
          ScrollReveal().reveal(`.${styles.description}`, {
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


    return <>
    
    <div className={styles.subTitle}>"מיומנות היא תחליף לכשרון מולד"</div>
    <div className={styles.title}>LEVEL UP</div>
    <div className={styles.subTitle}>השתלמות למקצועיות</div>
    <div className={styles.description}>מה כבר אפשר לחדש לאחת שעוסקת בתחום את שואלת?</div>
  <div className={styles.center}> 
     <Cube title=" הסרה והחלקת החומר בצורה נכונה ללא פגיעה בציפורן הטבעית"/>
    <Cube title=" שיוף צורה סימטרית ומדוייקת "/>
    <Cube title="מניקור משולב הנעשה בעזרת ראשי מניקור ומספריים!"/>
    <Cube title="פיסול מבנה אנטומי בצורה מדוייקת"/>
    <Cube title="מריחה צמודה לקטיקולה ללא מכחול חיצוני!"/>
    <Cube title="והכי חשוב, צילום עבודות קטלוג "/>
    </div>
    <div className={styles.description}>אני יודעת כמה זה קשה לא לתמחר את עצמך כמו שאת רוצה</div>
    <div className={styles.description}>אני יודעת כמה זה קשה להוציא תוצאה שאת לא מרוצה ממנה</div>
    <div className={styles.description}>אני יודעת כמה קשה לאהוב את מה שאת רואה מולך</div>
    <div className={styles.subTitle}>זה עומד להשתנות</div>
    <FormScreen/>
    </>
}
export default FifthScreen