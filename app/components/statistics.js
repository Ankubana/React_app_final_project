import Statistics__styles from '../components/statistics.module.css'

export default function Statistic() {
  return (
    <div className={Statistics__styles.statistics__wrapper}>
      <div className={Statistics__styles.statistics__contents__header}>
        <div className={Statistics__styles.statistics__heading}>Enhance your knowledge</div>
        <div className={Statistics__styles.statistics__heading}>Achieve greater success</div>
        <div className={Statistics__styles.statistics__heading}>Improve your health</div>
        <div className={Statistics__styles.statistics__heading}>Develop better parenting skills</div>
        <div className={Statistics__styles.statistics__heading}>Increase happiness</div>
        <div className={Statistics__styles.statistics__heading}>Be the best version of yourself!</div>
      </div>

      <div className={Statistics__styles.statistics__contents__details}>
        {/* Data 1 */}
        <div className={Statistics__styles.statistics__data}>
          <div className={Statistics__styles.statistics__data__number}>93%</div>
          <div className={Statistics__styles.statistics__data__title}>
            of Summarist members <b>significantly increase</b> reading frequency.
          </div>
        </div>

        {/* Data 2 */}
        <div className={Statistics__styles.statistics__data}>
          <div className={Statistics__styles.statistics__data__number}>96%</div>
          <div className={Statistics__styles.statistics__data__title}>
            of Summarist members <b>establish better</b> habits.
          </div>
        </div>

        {/* Data 3 */}
        <div className={Statistics__styles.statistics__data}>
          <div className={Statistics__styles.statistics__data__number}>90%</div>
          <div className={Statistics__styles.statistics__data__title}>
            have made <b>significant positive change</b> to their lives.
          </div>
        </div>
      </div>
    </div>
  )
}
