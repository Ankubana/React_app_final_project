 import Statistics__styles from "../components/statistics.module.css"
export default function statistic_contuinued(){
 
 return(
    <div className={Statistics__styles.statistics__wrapper}>
     <div className={`${Statistics__styles.statistics__contents__details} ${Statistics__styles.statistics__data__details__second}`}>
        <div className={Statistics__styles.statistics__data}>
        <div className={Statistics__styles.statistics__data__number}>91%</div>
        <div className={Statistics__styles.statistics__data__title}>
            of Summarist members 
            <b>report feeling more productive</b>
        after incorporating the service into their daily routine.</div>
     </div>
     <div className={Statistics__styles.statistics__data}>
        <div className={Statistics__styles.statistics__data__number}>94%</div>
        <div className={Statistics__styles.statistics__data__title}>of Summarist members have <b>noticed an improvement</b> 
         in their overall comprehension and retention of information.
        </div>
     </div>
        <div className={Statistics__styles.statistics__data}>
        <div className={Statistics__styles.statistics__data__number}>88%</div>
        <div className={Statistics__styles.statistics__data__title}>of Summarist members <b>feel more informed </b> about current events and industry trends since using the platform.</div>
     </div>
     </div>
    <div className={`${Statistics__styles.statistics__contents__header} ${Statistics__styles.statistics__content__header__second}`}>
        <div className={Statistics__styles.statistics__heading}>Expand your learning</div>
        <div className={Statistics__styles.statistics__heading}>Strengthen your vitality</div>
        <div className={`${Statistics__styles.statistics__heading} ${Statistics__styles.statistics__heading__active}`}>Become a better caregiver</div>
        <div className={Statistics__styles.statistics__heading}>Improve your mood</div>
      <div className={Statistics__styles.statistics__heading}>Maximize your abilities</div>
      </div>
      </div>
 )
} 