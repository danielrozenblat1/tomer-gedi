
import NewBox from "../components/newBox/NewBox"
import styles from "./SecondScreen.module.css"
import CountingUp from "../components/count/CountUp"
import Box from "../components/box/Box"
import loop from "../Icons/wired-outline-233-arrow-22.json"
import money from "../Icons/wired-outline-298-coins.json"
import free from "../Icons/wired-outline-436-love-care.json"
import tomer from "../images/תומר גדי בואי נכיר.png"
import Button from "../components/button/Button"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const SecondScreen=()=>{

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
        ScrollReveal().reveal(`.${styles.center}`, {
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
<div className={styles.title} id="מי אני">בואי נכיר</div>
<div className={styles.center}><img className={styles.image} alt="תומר גדי" src={tomer}/></div>
<div className={styles.description}>התחלתי ב2016 עוד שלא היו מכונות שיוף, הייתי בת 15, עשיתי קורס לק ג'ל בנייה וקישוטים עם עוד 7 בנות בכיתה, כשסיימתי את הקורס הרגשתי שלא למדתי כלום. פתחתי עמדה בבית והתחלתי לעשות לק לעצמי ולחברות, עם הזמן ומפה לאוזן התחלתי לקבל פניות מנשים שרוצות לעשות לק רק אצלי וככה זה התגלגל. תוך 4 חודשים היה לי יומן עם 80 לקוחות ורובן חוזרות!</div>
<div className={styles.subTitle}>היום</div>
<div className={styles.description}>בגיל 23, לאחר </div>
<CountingUp/>
<div className={styles.description}>אני יכולה להגיד לך בפה מלא! - זה אפשרי!</div>
<div className={styles.subTitle}>את יכולה</div>
<div className={styles.row}>
<Box icon={money} title="לשלוט על ההכנסות שלך" description="עם מספיק התמדה והשקעה, תוכלי להכניס בחודש סכומים שפעם היו בגדר חלום!"/>
<Box icon={loop} title="לכתוב מחדש את חוקי המשחק" description="היי בוסית! הגיע הזמן לקבוע את הכללים שלך. שכחי מ-9 עד 17, מעכשיו את מחליטה מתי לעבוד, מתי לנוח, ואיך לבנות את הקריירה שתמיד חלמת עליה."/>
<Box icon={free} title="להנות מכל יום שעובר" description="כשאת אוהבת מה שאת עושה ומתפרנסת מזה , אין דבר כזה יום עבודה.. כל יום הוא הנאה מתחדשת"/>

</div>
<div className={styles.center}><Button text="לחצי כאן כדי לשמוע עוד"/></div>
 </>
}
export default SecondScreen