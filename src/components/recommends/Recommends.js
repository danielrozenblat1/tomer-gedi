import styles from "./Recommends.module.css"
import result1 from "../../images/תומר גדי לקוחה ממליצה 1.png"
import result2 from "../../images/תומר גדי לקוחה ממליצה 2.png"
import result3 from "../../images/תומר גדי לקוחה ממליצה 3.png"
import result4 from "../../images/תומר גדי לקוחה ממליצה 4.png"
import result5 from "../../images/תומר גדי לקוחה ממליצה 5.png"
import result6 from "../../images/תומר גדי לקוחה ממליצה 6.png"
import result7 from "../../images/תומר גדי לקוחה ממליצה 7.png"




import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Recommends=()=>{
    const sliderSettings = {
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 550 ? 1 : window.innerWidth <= 1050 ? 2 : window.innerWidth <= 1250 ? 3: 4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'image',
          src: result4,
        },
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result5,
        },
        {
          type: 'image',
          src: result3,
        },
      
    
        {
          type: 'image',
          src: result6,
        },
        {
          type: 'image',
          src: result7,
        },
       
   
        ];  
return <>

<div className={styles.explain} id="תוצאות">לחלק מהבנות שכבר יצאו ממני עם תעודה היה חשוב להגיד לי מה הן חושבות על התהליך שעברו</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`תומר גדי לקוחה ממליצה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>

<div className={styles.center}><Button text="תומר, אני רוצה לשמוע עוד"/></div>
</>


}
export default Recommends