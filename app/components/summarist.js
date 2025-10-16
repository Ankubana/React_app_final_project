 "use client"
 import { AiFillStar, AiOutlineStarHalf } from "react-icons/ai";
 import { FaStarHalfAlt } from "react-icons/fa";
 import summarist_styles from "./summarist.module.css"

import { AiOutlineBook } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import IconBookmark from "../components/book_icon"
import IconChatQuate from"../components/IconChatQuote"

    
export default function Summarist(){
function rating(){
 const stars=[]
    for(let i=1;i<=5;i++){
    if (i<=4)
    stars.push(<AiFillStar  key={i} color="blue"/>)
    else{
     stars.push(<FaStarHalfAlt key={i} color="blue"/>)
    }
    
}
return <div>{stars}</div>
}

    return(
    < section id="number"> 
    < div className={summarist_styles.container}>
    <div className={summarist_styles.row}>
    <div className={summarist_styles.section__title}>Start growing with Summarist now</div>
    <div className={summarist_styles.numbers__wrapper}>
    <div className={summarist_styles.numbers}>
    <div className={summarist_styles.numbers__icon}><IconBookmark color="blue" className={summarist_styles.summarist_numbers__icon__ltAms}/> </div>
    <div className={summarist_styles.numbers__title}>3 Million</div>
    <div className={summarist_styles.numbers__sub__title}>Downloads on all platforms</div>
    </div>
    <div className={summarist_styles.numbers}>
    <div className={`${summarist_styles.numbers__icon}`}>{rating()}
    </div>
     <div className={summarist_styles.numbers__title}>4.5 Stars</div>
     <div className={summarist_styles.numbers__sub__title}>Average ratings on iOS and Google Play</div>
    </div>
    <div className={summarist_styles.numbers}>
    <div className={summarist_styles.numbers__icon}><IconChatQuate color="blue" fontSize={24}/></div>
    <div className={summarist_styles.numbers__title}>97%</div>
    <div className={summarist_styles.numbers__sub__title}>Of Summarist members create a better reading habit</div>
    </div> 
    </div>
    </div>        
     
     </div>

     </section>

    )

}