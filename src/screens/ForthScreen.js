import LessonBubble from "../components/steps/Step"
import TripleRowColumn from "../components/what/What";
import styles from "./ForthScreen.module.css"
import personal from "../images/תומר גדי יחס אישי.png"
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
          description: "כל קורס מונה עד 2 תלמידות בכיתה ככה לא תרגישי לבד לשניה!",
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
    <div className={styles.description} id="קורס למתחילות">תומר,איך הכל קורה?</div>
    <div className={styles.subTitle}>גם אם אין לך ידע בתחום, נתחיל ב</div>
    <div className={styles.title}>"Baby Steps"</div>
    <div className={styles.description}>4 שיעורים סופר קריטים לכל נייליסטית!</div>
    <div className={styles.subTitle}>כל שיעור בונה את הרקע לשיעור שאחריו וזה הולך ככה</div>
    <div className={styles.row}>
      <LessonBubble
        lessonNumber={1}
        title="שיעור עיוני ודיגיטלי"
        description=" השיעור הראשון הוא שיעור דיגיטלי - בשיעור זה נחשוף כל מה שתצטרכי לדעת בעולם הציפורניים, הכרת מבנה הציפורן, שלבי עבודה, מושגים ועוד בונוסים שיעזרו לך בתחילת דרכך!"
      />
      <LessonBubble
        lessonNumber={2}
        title="שיעור מעשי ראשון בקורס"
        description="במהלך השיעור נבצע חזרה על החומר, נבצע את כל השלבים מההתחלה ועד הסוף על מודליסטית ונבין את טכניקת העבודה לעומק"
      />
        
    </div>
    <div className={styles.row}>
    <LessonBubble
        lessonNumber={3}
        title="שיעור מעשי שני"
        description="אחרי שהבנו את הטכניקה בשיעור הקודם, ניגש צעד אחד קדימה ונלמד לעשות מבנה אנטומי! בסוף השיעור את הולכת לקבל שיעורי בית לתרגל את כל מה שלמדנו כדי שתגיעי הכי מוכנה שאפשר לשיעור הבא!"
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