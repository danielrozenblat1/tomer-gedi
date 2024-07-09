
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
<div className={styles.title}>בואי נכיר</div>
<div className={styles.center}><img className={styles.image} alt="תומר גדי" src={tomer}/></div>
<div className={styles.description}>התחלתי ב2016 עוד שלא היו מכונות שיוף! הייתי בת 15 אז, עשיתי קורס על לק גל בנייה וקישוטים עם עוד 7 בנות בכיתה, כשסיימתי את הקורס הרגשתי שלא למדתי כלום ושום דבר! התחלתי לעשות על עצמי ועל חברות, עם הזמן התחלתי לקבל פניות מאנשים שרוצים לעשות אצלי לק וככה זה התגלגל! תוך 4 חודשים היה לי יומן עם 80 לקוחות ורובן חוזרות!</div>
<div className={styles.subTitle}>היום</div>
<div className={styles.description}>בגיל 23, לאחר </div>
<CountingUp/>
<div className={styles.description}>אני יכולה להגיד לך בפה מלא! - זה אפשרי!</div>
<div className={styles.subTitle}>את יכולה</div>
<div className={styles.row}>
<Box icon={money} title="לשלוט על ההכנסות שלך" description="עם מספיק התמדה והשקעה, תוכלי להכניס בחודש סכומים שפעם היו בגדר חלום!"/>
<Box icon={loop} title="לצאת מהלופ שהגדירו לך" description="אין עוד בוס! אין עוד 9-17 ואין עוד לחפש את עצמך ולעבור מעבודה לעבודה! מעכשיו.. את קובעת לעצמך! מתי לקום,מתי לעבוד, מתי לצאת לחופש ומתי בא לך לעבוד!"/>
<Box icon={free} title="להנות מכל יום שעובר" description="כשאת אוהבת מה שאת עושה ומתפרנסת מזה , אין דבר כזה יום עבודה.. כל יום הוא הנאה מתחדשת"/>

</div>
<div className={styles.center}><Button text="לחצי כאן כדי לשמוע עוד"/></div>
 </>
}
export default SecondScreen