"use client";

import { AiFillFileText, AiOutlineDown } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import Plan_styles from "../components/plan.module.css";
import { FaHandshake } from 'react-icons/fa';

function PlantIcon() {
  return <GiPlantPot size={40} color="#1E3A8A" />;
}


export default function PlanFeatures() {
  return (
    <div className={`${Plan_styles.wrapper} ${Plan_styles.wrapper__full}`}>
      {/* Sidebar overlay (optional hidden background) */}
      <div
        className={`${Plan_styles.sidebar__overlay} ${Plan_styles.sidebar__overlay__hidden}`}
      ></div>

      {/* Plan Section */}
      <div className={Plan_styles.plan}>
        {/* Header Section */}
        <div className={Plan_styles.plan__header__wrapper}>
          <div className={Plan_styles.plan__header}>
            <div className={Plan_styles.plan__title}>
              Get unlimited access to many amazing books to read
            </div>
            <div className={Plan_styles.plan__sub__title}>
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className={Plan_styles.plan__img__mask}>
              <img
                alt="pricing"
                src="pricing-top.jpg"
                width="860"
                height="722"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        {/* Features Section */}
        <div className={Plan_styles.plan__features__wrapper}>
          {/* Feature 1 */}
          <div className={Plan_styles.plan__features}>
            <figure className={Plan_styles.plan__features__icon}>
              <AiFillFileText size={60} color="currentColor" />
            </figure>
            <div className={Plan_styles.plan__features__text}>
              <b>Key ideas in few min</b> with many books to read
            </div>
          </div>
           
          {/* Feature 2 */}
          <div className={Plan_styles.plan__features}>
            <figure className={Plan_styles.plan__features__icon}>
              
                < img src= "seedling.png" className={Plan_styles.seedling_img}/>
                
               
            </figure>
            <div className={Plan_styles.plan__features__text}>
              <b>3 million</b> people growing with Summarist everyday
            </div>
          </div>

          {/* Feature 3 */}
          <div className={Plan_styles.plan__features}>
            <figure className={Plan_styles.plan__features__icon}>
              <FaHandshake size={60} color="currentColor" />
            </figure>
            <div className={Plan_styles.plan__features__text}>
              <b>Precise recommendations</b> collections curated by experts
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={Plan_styles.section__title}>Choose the plan that fits you</div>
        <div className={`${Plan_styles.plan__card} ${Plan_styles.plan__card__active}`}>
           <div className={Plan_styles.plan__card__circle}>
            <div className={Plan_styles.plan__card__dot}>
            </div>
            </div><div className={Plan_styles.plan__card__content}>
                <div className={Plan_styles.plan__card__title}>Premium Plus Yearly</div>
                <div className={Plan_styles.plan__card__price}>$99.99/year</div>
                <div className={Plan_styles.plan__card__text}>7-day free trial included</div>
           </div></div>
           <div className={Plan_styles.plan__card__separator}>
            
            <div className={Plan_styles.plan__separator}>or</div></div>
           <div className={`${Plan_styles.plan__card} ${Plan_styles.plan__card__active}`}>
           <div className={Plan_styles.plan__card__circle}>
            <div className={Plan_styles.plan__card__dot}>
            </div>
            </div><div className={Plan_styles.plan__card__content}>
                <div className={Plan_styles.plan__card__title}>Premium Plus Monthly</div>
                <div className={Plan_styles.plan__card__price}>$99.99/year</div>
                <div className={Plan_styles.plan__card__text}>no trial included</div>
           </div></div>
           <div className={Plan_styles.plan__card__cta}>
            <span className={Plan_styles.btn__wrapper}>
            <button className={Plan_styles.btn}>
            <span>Start your first month</span>
            </button>
           </span>
           <div className={Plan_styles.plan__disclaimer}>30-day money back guarantee, no questions asked.
           </div>
           </div>
        <div className={Plan_styles.faq__wrapper}>
          <div className={Plan_styles.accordion__card}>
            <div className={Plan_styles.accordion__header}>
              <div className={Plan_styles.accordion__title}>
                How does the free 7-day trial work?
              </div>
              <AiOutlineDown className={Plan_styles.accordion__icon} />
            </div>
            <div className={Plan_styles.accordion__body}>
              Begin your complimentary 7-day trial with a Summarist annual
              membership. You are under no obligation to continue, and you will
              only be billed when the trial period expires.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
