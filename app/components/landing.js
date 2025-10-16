import landing_styles from "./landing.module.css"

 const arr=[1,2,3,4,5,6,7,8,9,10];
 const getResults=arr.map((num)=>num*2)
  console.log(getResults)

export default function Landing(){
    return(
       <section className={landing_styles.landing}>
        <div  className={landing_styles.container}>
        <div className={landing_styles.row}>
         <div className={landing_styles.linding__wrapper}>
         <div className={landing_styles.landing__content}>
         <div className={landing_styles.landing__content__title}> 
        Gain more knowledge <br className="Removie__tablate"/>
in less time</div>
         
         <div className= {landing_styles.landing__content__subtitle}>
            Great summaries for busy people,
            <br className="Removie__tablate"/>
individuals who barely have time to read,
<br className="Removie__tablate"/>
and even people who don’t like to read.
         </div>
         <button className={`${landing_styles.btn} ${landing_styles.home__cta__btn}`}>
        Login </button>
          </div>
          <figure className={landing_styles.landing__img__wrapper} >
         <img src="landing.png" alt="card" className={landing_styles.landing_img}>
         </img>
         </figure>
         </div> 
        </div>
        </div>  
       </section>
    )

}