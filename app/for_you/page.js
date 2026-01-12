"use client";

import for_you_styles from "./for_you.module.css";
import Link from "next/link";
import { HomeIcon, BookmarkIcon,ArrowRightOnRectangleIcon,
  PencilIcon,QuestionMarkCircleIcon,MagnifyingGlassIcon,  Cog6ToothIcon } from '@heroicons/react/24/outline';
import Nav from "../components/nav";
import { usePathname } from "next/navigation";
export default function Landing() {
const pathname = usePathname(); 
 
  

  return (
    <div className={for_you_styles.wrapper}>
    <div className={for_you_styles.search__background}>
    <div className={for_you_styles.search__wrapper}>
    <figure><img src="logo" alt=""/>
    </figure>
   <div className={for_you_styles.search__content}>
    <div className={for_you_styles.search}>
    <div className={for_you_styles.search__input__wrapper}>
    <input className={for_you_styles.search__input} placeholder="Search for books" type="text" />
    <div className={for_you_styles.search__icon}>
      <MagnifyingGlassIcon/>
    </div>
    </div>
    </div>
    </div>
    </div>
     <div className={`${for_you_styles.sidebar__overla} ${for_you_styles.sidebar__overlay__hidden}`}/>
    </div> 
     <div className={`${for_you_styles.sidebar} ${for_you_styles.sidebar__closed}`}>
    <div className={for_you_styles.sidebar__logo}>
      <img src="/logo.png" alt="Logo"  className={for_you_styles.logo}/>
     </div>
    <div className={for_you_styles.sidebar__wrapper}>
    <div className={for_you_styles.sidebar__top}>
    <Link className={for_you_styles.sidebar__link__wrapper} href="/for-you">
    <div className={`${for_you_styles.sidebar__link_line} ${pathname=== "/for-you" ? for_you_styles.active__tab : ""}`}>
    </div>                                                                                                                                  
    <div className={for_you_styles.sidebar__icon__wrapper}>
      <HomeIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>For you</div>
    </Link><a className={for_you_styles.sidebar__link__wrapper} href="/library">
     <div className={`${for_you_styles.sidebar__link_line} ${
      pathname === "/library" ? for_you_styles.active__tab : ""}`}>
    </div>
    <div className={for_you_styles.sidebar__icon__wrapper}>
     <BookmarkIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>My Library</div>
    </a>
    <div className={`${for_you_styles.sidebar__link__wrapper} ${for_you_styles.sidebar__link__not_allowed}`}>
     <div className={for_you_styles.sidebar__link_line} >
    </div><div className={for_you_styles.sidebar__icon__wrapper}>
    <PencilIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>Highlights</div></div>
    <div className={for_you_styles.sidebar__link__wrapper}>
     <div className={for_you_styles.sidebar__link_line}>
    </div><div className={for_you_styles.sidebar__icon__wrapper}>
     <MagnifyingGlassIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>Search</div>
    </div></div><div className={for_you_styles.for_you_stylessidebar__bottom}>
    <a className={for_you_styles.sidebar__link__wrapper} href="/settings">
      <div className={`${for_you_styles.sidebar__link_line} ${
      pathname === "/settings" ? for_you_styles.active__tab : ""}`}/>
    <div className={for_you_styles.sidebar__icon__wrapper}>
        < Cog6ToothIcon/>
    </div><div className={for_you_styles.sidebar__link__text}>Settings</div>
      </a><div className={`${for_you_styles.sidebar__link__wrapper} ${for_you_styles.sidebar__link__not_allowed}`}>
       <div className={for_you_styles.sidebar__link_line}>
      </div><div className={for_you_styles.sidebar__icon__wrapper}>
      < QuestionMarkCircleIcon/>
      </div>
      <div className={for_you_styles.sidebar__link__text}>Help &amp; Support</div>
      </div>
      <div className={for_you_styles.sidebar__link__wrapper}>
       <div className={for_you_styles.sidebar__link_line}/>
      <div className={for_you_styles.sidebar__icon__wrapper}>
      < ArrowRightOnRectangleIcon/>
      </div>
      <div className={for_you_styles.sidebar__link__text}>Logout</div>
      </div>
      </div>
      </div>
      </div>
      < div  className={for_you_styles.row}>
      < div  className={for_you_styles.container}>
       < div className={for_you_styles.for_you__wrapper}>
       <a className={for_you_styles.selected__book} href="/book/f9gy1gpai8">
       <div className={for_you_styles.selected__book__sub_title}>How Constant Innovation Creates Radically Successful Businesses</div>
       <div className={for_you_styles.selected__book__line}></div>
       <div className={for_you_styles.selected__book__content}>
        <figure className={for_you_styles.book__image__wrapper}>

        </figure>
        <div className={for_you_styles.selected__book__text}>
        <div className={for_you_styles.selected__book__title}>The Lean Startup</div>
        <div className={for_you_styles.selected__book__author}>Eric Ries</div>
        <div className={for_you_styles.selected__book__duration_wrapper}>
        <div className={for_you_styles.selected__book__icon}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"
         xmlns="http://www.w3.org/2000/svg">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 
         1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z">
         </path>
         </svg>
         </div>
        <div className={for_you_styles.selected__book__duration}>3 mins 23 secs</div>
        </div>
        </div>
        </div>
        </a>
        </div>
       </div>
      </div>
      </div>
      )
}
