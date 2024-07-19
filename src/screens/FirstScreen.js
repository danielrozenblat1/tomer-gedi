import styles from "./FirstScreen.module.css"
import tomer from "../images/תומר גדי.png"
import Button from "../components/button/Button"
import FormScreen from "../components/form/FormScreen"

const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled?styles.descriptionP:styles.description}>הדרך להפוך את התשוקה שלך למקצוע מתחילה כאן!</div>
<div className={styles.center}><img className={styles.image} src={tomer} alt="תומר גדי"/></div>
<h1 className={styles.title}>תומר גדי</h1>
<h2 className={styles.job}>קורס לק ג׳ל | השתלמויות למקצועיות</h2>
<div className={styles.description}> בגיל 23, אחרי 6 שנים בתחום אני אומרת לך בפה מלא</div>
<div className={styles.bold}>את יכולה להחליט מתי לעבוד, כמה לעבוד, לבחור איך לחיות את החיים שלך!</div>

<FormScreen/>
</>


}
export default FirstScreen