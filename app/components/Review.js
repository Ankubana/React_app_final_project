"use client"; // ✅ add this if you’re in the /app directory (Next.js 13+)
import { FaStarHalfAlt } from "react-icons/fa";
import Review_styles from "../components/Review.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Review() {
  function rating(){
   const stars=[]
      for(let i=1;i<=5;i++){
      stars.push(<AiFillStar  key={i} color="blue" fontSize={24}/>)
      
  }
  return <div>{stars}</div>
  }
  return (
    <section  className={Review_styles.reviews}>
      <div className={Review_styles.row}>
        <div className={Review_styles.container}>
          <div className={Review_styles.section__title}>What our members say</div>
          <div className={Review_styles.reviews__wrapper}>
            <div className={Review_styles.review}>
              <div className={Review_styles.review__header}>
                <div className={Review_styles.review__name}>Hanna M.</div>
                <div className={Review_styles.review__stars}>
                  {rating()}
                </div>
              </div>

              <div className={Review_styles.review__body}>
                This app has been a <b>game-changer</b> for me! It’s saved me so much time and effort
                in reading and comprehending books. Highly recommend it to all book lovers.
              </div>
            </div>
            <div className={Review_styles.review}>
              <div className={Review_styles.review__header}>
                <div className={Review_styles.review__name}>David B..</div>
                <div className={Review_styles.review__stars}>
                  {rating()}
                </div>
              </div>

              <div className={Review_styles.review__body}>
                I love this app! It provides <b>game-changer</b> for me! It’s saved me so much time and effort
                in reading and comprehending books. Highly recommend it to all book lovers.
              </div>
            </div>
            <div className={Review_styles.review}>
              <div className={Review_styles.review__header}>
                <div className={Review_styles.review__name}>Nathan S.</div>
                <div className={Review_styles.review__stars}>
                 {rating()}
                </div>
              </div>

              <div className={Review_styles.review__body}>
                This app has been a <b>game-changer</b> for me! It’s saved me so much time and effort
                in reading and comprehending books. Highly recommend it to all book lovers.
              </div>
            </div>
            <div className={Review_styles.review}>
              <div className={Review_styles.review__header}>
                <div className={Review_styles.review__name}>Ryan .</div>
                <div className={Review_styles.review__stars}>
                  {rating()}
                </div>
              </div>

              <div className={Review_styles.review__body}>
                This app has been a <b>game-changer</b> for me! It’s saved me so much time and effort
                in reading and comprehending books. Highly recommend it to all book lovers.
              </div>
            </div>
          <button className={Review_styles.btn}>
        Login </button>
          </div>
          
        </div>
      </div>
     
    </section>

  );
}
