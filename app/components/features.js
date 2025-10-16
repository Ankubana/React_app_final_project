
import features_styles from'../components/features.module.css'
import { AiFillFileText } from "react-icons/ai";
import { AiFillAudio } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
export default function Features() {
  return (
    <section id="features">
      <div className={features_styles.container}>
        <div className={features_styles.row}><br/><br/><br/><br/>
          <div className={features_styles.section__title}>
            Understand in few minutes
          </div>

          <div className={features_styles.features__wrapper}>

            {/* Feature 1 */}
            <div className={features_styles.features}>
              <div className={features_styles.features__icon}>
                <AiFillFileText size={48} color="#022B3A" />
              </div>
              <div className={features_styles.feature__title}>Read or listen</div>
              <div className={features_styles.feature__sub__title}>
                Save time by getting the  core ideas <br/>from the best books.
              </div>
            </div>

            {/* Feature 2 */}
            <div className={features_styles.features}>
              <div className={features_styles.features__icon}>
                <AiFillBell size={48} color="#022B3A" />
              </div>
              <div className={features_styles.feature__title}>Find your next read</div>
              <div className={features_styles.feature__sub__title}>
                Explore book lists and personalized recommendations.
              </div>
            </div>

            {/* Feature 3 */}
            <div className={features_styles.features}>
              <div className={features_styles.features__icon}>
                <AiFillAudio size={48} color="#022B3A" />
              </div>
              <div className={features_styles.feature__title}>Briefcasts</div>
              <div className={features_styles.feature__sub__title}>
                Get valuable insights from briefcasts.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}