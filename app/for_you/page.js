"use client";

import for_you_styles from "./for_you.module.css";
import Link from "next/link";
import { HomeIcon, BookmarkIcon,ArrowRightOnRectangleIcon,
  PencilIcon,QuestionMarkCircleIcon,MagnifyingGlassIcon,  Cog6ToothIcon } from '@heroicons/react/24/outline';
import Nav from "../components/nav";
export default function Landing() {
  return (
   <div id="__next">
    <div className={for_you_styles.wrapper}>
    <div className={for_you_styles.search__background}>
    <div className={for_you_styles.search__wrapper}>
    <figure><img src="logo" alt=""/>
    </figure><div className={for_you_styles.search__content}>
    <div className={for_you_styles.search}>
    <div className={for_you_styles.search__input__wrapper}>
    <input className={for_you_styles.search__input} placeholder="Search for books" type="text" />
    <div className={for_you_styles.search__icon}>
      <MagnifyingGlassIcon />
    </div>
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
    <a className={for_you_styles.sidebar__link__wrapper} href="/for-you">
    <div className={`${for_you_styles.sidebar__link_line} ${for_you_styles.active__tab}`}>
    </div>
    <div className={for_you_styles.sidebar__icon__wrapper}>
      <HomeIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>For you</div>
    </a><a className={for_you_styles.sidebar__link__wrapper} href="/library">
    <div className={for_you_styles.sidebar__link_line}>
    </div>
    <div className={for_you_styles.sidebar__icon__wrapper}>
     <BookmarkIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>My Library</div>
    </a>
    <div className={`${for_you_styles.sidebar__link__wrapper} ${for_you_styles.sidebar__link__not_allowed}`}>
    <div className={for_you_styles.sidebar__link_line}>
    </div><div className={for_you_styles.sidebar__icon__wrapper}>
    <PencilIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>Highlights</div></div>
    <div className={`${for_you_styles.sidebar__link__wrapper} ${for_you_styles.sidebar__link__not_allowed}`}>
    <div className={for_you_styles.sidebar__link_line}>
    </div><div className={for_you_styles.sidebar__icon__wrapper}>
     <MagnifyingGlassIcon/>
    </div>
    <div className={for_you_styles.sidebar__link__text}>Search</div>
    </div></div><div className={for_you_styles.for_you_stylessidebar__bottom}>
    <a className={for_you_styles.sidebar__link__wrapper} href="/settings">
    <div className={for_you_styles.sidebar__link_line}></div>
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
      <div className={for_you_styles.sidebar__link__line}></div>
      <div className={for_you_styles.sidebar__icon__wrapper}>
      < ArrowRightOnRectangleIcon/>
      </div>
      <div className={for_you_styles.sidebar__link__text}>Logout</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      )
}
