import styles from "./ThirdScreen.module.css"
import nail from "../Icons/wired-lineal-1592-nail-polish.json"
import service from "../Icons/wired-lineal-1029-service.json"
import special from "../Icons/wired-lineal-47-to-do-list.json"
import NewBox from "../components/newBox/NewBox"
const ThirdScreen=()=>{


return <>
<div className={styles.subTitle}>חשוב לי שתביני</div>
<div className={styles.description}>מיד אחרי הקורס את תוכלי להפוך לעצמאית בתחום שאת הכי אוהבת! זה אמנם נשמע חלומי אבל זה ידרוש ממך 3 דברים עיקריים</div>
<div className={styles.row}>
<NewBox icon={nail} title="התמדה" description="את הולכת להיות עצמאית לכל דבר ועניין! ואת צריכה להבין שלא הכל יבוא בקלות, ברגע שתתמידי ותתחילי לצבור שם,מוניטין ומקצועיות שנצברים עם הזמן ,הדברים יתחילו לזרום יותר בקלות"/>
<NewBox icon={special} title="משימתיות" description=" כדי להצליח בתחום את תמיד תצטרכי ללמוד על המעבר! איך בונים עסק בצורה נכונה, מה התשתיות שצריך ,שיווק מקצועי, איך להשיג לקוחות,ללמוד את האלגוריתם לעומק וזה מה שנלמד לאורך הקורס"/>
<NewBox icon={service} title="שירותיות" description="כדי לשמר את הבנות שמגיעות אלייך ולא יברחו למתחרות, את חייבת לשמור על רמת שירותיות וסבלנות גבוהה כלפי כל אחת"/>
</div>
<div className={styles.description}>זה לא הולך להיות קל! אבל ברגע שתיישמי את שלושת אלה</div>
<div className={styles.bold}>תקרת השכר שלך לא תהיה מוגבלת</div>
<div className={styles.bold}>הזמן שלך יהיה נתון לשליטתך</div>
<div className={styles.bold}>והכי חשוב - את תקומי בבוקר ותעשי את מה שאת אוהבת לעשות!</div>
</>


}
export default ThirdScreen