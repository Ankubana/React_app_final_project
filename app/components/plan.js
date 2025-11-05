// app/components/PlanFeatures.jsx (or .tsx if using TypeScript)
import { AiFillFileText, AiOutlineDown } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import {styles} from "../components/plan.module.css"
export default function PlanFeatures() {
  return (
    <div className={styles_plan.plan__features__wrapper}>
      {/* Feature 1 */}
      <div className={styles_plan.plan__features}>
        <figure className={styles_plan.plan__features__icon}>
          <AiFillFileText size={24} color="currentColor" />
        </figure>
        <div className={styles_planplan__features__text}>
          <b>Key ideas in few min</b> with many books to read
        </div>
      </div>

      {/* Feature 2 */}
      <div className={styles_plan.plan__features}>
        <figure className={styles_plan.plan__features__icon}>
          <FaUsers size={24} color="currentColor" />
        </figure>
        <div className={styles_plan.plan__features__text}>
          <b>3 million</b> people growing with Summarist everyday
        </div>
      </div>

      {/* Feature 3 */}
      <div className={styles_plan.plan__features}>
        <figure className={styles_plan.plan__features__icon}>
          <BsStars size={24} color="currentColor" />
        </figure>
        <div className={styles_plan.plan__features__text}>
          <b>Precise recommendations</b> collections curated by experts
        </div>
      </div>

      {/* Accordion Example (FAQ Section) */}
      <div className={styles_plan.faq__wrapper}>
        <div className={styles_plan.accordion__card}>
          <div className={styles_plan.accordion__header}>
            <div className={styles_plan.accordion__title}>
              How does the free 7-day trial work?
            </div>
            <AiOutlineDown className={`${styles_plan.accordion__icon}${styles_plan.accordion__icon__rotate }`}/>
          </div>
          <div className={styles_plan.accordion__body}>
            Begin your complimentary 7-day trial with a Summarist annual membership.
            You are under no obligation to continue, and you will only be billed
            when the trial period expires.
          </div>
        </div>
      </div>
    </div>
  );
}