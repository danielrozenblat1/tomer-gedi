import LessonBubble from "../components/steps/Step"
import TripleRowColumn from "../components/what/What";
import styles from "./ForthScreen.module.css"
import personal from "../images/תומר גדי יחס.png"
import knowledge from "../images/תומר גדי שיווק.png"
import certificate from "../images/תומר גדי תעודה.png"
import Button from "../components/button/Button";
import FormScreen from "../components/form/FormScreen";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const ForthScreen=()=>{

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


    const rowsData = [
        {
          title: "יחס אישי",
          description: "כל כיתה שלי מונה אך ורק 2 תלמידות ככה שאני איתך בכל צעד",
          imageSrc: personal
        },
        {
          title: "ידע שיווקי קריטי",
          description: "תסכימי איתי שזה לא מספיק רק להוציא עבודות מושלמות,לאורך כל הקורס, נבין מהי חשיבות השיווק והפרסום ברשתות החברתיות.",
          imageSrc: knowledge
        },
        {
          title: "תעודת הסמכה מקצועית",
          description: "כמובן שלאחר הקורס את תקבלי ממני תעודת הסמכה, תעודת ההסמכה תעניק לך בטחון להתחלת דרכך בתחום ",
          imageSrc: certificate
        }
      ];
    
    return <>
    <div className={styles.description}>תומר,איך הכל קורה?</div>
    <div className={styles.subTitle}>גם אם 0 ידע בתחום, נתחיל ב</div>
    <div className={styles.title}>"Baby Steps"</div>
    <div className={styles.description}>4 שיעורים פשוטים אבל סופר קריטים לכל נייליסטית!</div>
    <div className={styles.row}>
      <LessonBubble
        lessonNumber={1}
        title="שיעור עיוני"
        description="בשיעור זה נחשוף כל מה שתצטרכי לדעת בעולם הציפורניים, הכרת מבנה הציפורן, שלבי עבודה, מושגים ועוד בונוסים שיעזרו לך בתחילת דרכך!"
      />
      <LessonBubble
        lessonNumber={2}
        title="שיעור מעשי ראשון בקורס"
        description="במהלך השיעור נבצע חזרה על החומר, נבצע עבודה (לק ג׳ל רגיל) על מודליסטית לאחר הדגמה שלי, שנוכל להתמקצע כמו שצריך!"
      />
        
    </div>
    <div className={styles.row}>
    <LessonBubble
        lessonNumber={3}
        title="שיעור מעשי שני"
        description="במהלך השיעור נלמד את שיטת ״מבנה אנטומי״, נבצע עבודה על מודליסטית ובסוף השיעור נעבור על השיעור, נבין קשיים שצפו על מנת שתוכלי לתרגל בבית, ותגיעי כמה שיותר מוכנה לשיעור גמר!"
      />
      <LessonBubble
        lessonNumber={4}
        title="שיעור גמר"
        description="במהלך השיעור תבצעי עבודה על מודליסטית עם מינימום התערבות מהצד שלי, שתוכלי לקבל את מלוא הביטחון בעבודה! תעבדי על צילום תמונות קטלוג, תקבלי תעודת הסמכה מקצועית, ומפה? את משוחררת!"
      />
      <div className={styles.subTitle}>מדובר בסך הכל ב- 20 שעות 

שיוציאו אותך עם המקצוע המבוקש ביותר! </div>
<div className={styles.description}>וזה לא הכל! בנוסף,את מקבלת ממני</div>


    </div>
    <TripleRowColumn rows={rowsData} />
  <FormScreen/>
    </>


}
export default ForthScreen