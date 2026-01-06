"use client";

import for_you_styles from "./for_you.module.css";
import Link from "next/link";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { FiEdit } from "react-icons/fi"; 
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import Nav from "../components/nav";
export default function Landing() {
  return (
    <>
      {/* LANDING */}
      
      {/* SIDEBAR OVERLAY */}
      <div className={`${for_you_styles.sidebar__overla}${for_you_styles.sidebar__overlay__hidden}`}/>
      {/* SIDEBAR */}
      <aside className={`${for_you_styles.sidebar}${for_you_styles.sidebar__closed}`}>
        <Nav/>
        <div className={for_you_styles.sidebar__logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={45}
           className="logo"/>
        </div>
        <div className={for_you_styles.sidebar__wrapper}>
          <div className={for_you_styles.sidebar__top}>
            <Link className={for_you_styles.sidebar__link__wrapper} href="/for-you">
              <div className={`${for_you_styles.sidebar__link__line}${for_you_styles.active__tab }`} />
              <div className={for_you_styles.sidebar__link__icon}><AiFillHome size={32}/></div>
              <div className={for_you_styles.sidebar__link__text}>For you</div>
            </Link>

            <Link className={for_you_styles.sidebar__link__wrapper} href="/library">
              <div className={for_you_styles.sidebar__link__line} />
              <div className={for_you_styles.sidebar__link__icon}><AiFillBook size={32} /></div>
              <div className={for_you_styles.sidebar__link__text}>My Library</div>
            </Link>

            <div className={for_you_styles.sidebar__link__wrapper}>
                <div className={for_you_styles.sidebar__link__line} />
                <div className={for_you_styles.sidebar__link__icon}><FiEdit size={32}/></div>
              
              <div className={for_you_styles.sidebar__link__text}>Highlights</div>
            </div>
             <div className={for_you_styles.sidebar__link__wrapper}>
                <div className={for_you_styles.sidebar__link__line} />
                <div className={for_you_styles.sidebar__link__icon}><AiOutlineSearch size={32}/></div>
              <div className={for_you_styles.sidebar__link__text}>Search</div>
            </div>
             
          </div>
          <div className={for_you_styles.sidebar__bottom}>
            <Link className={for_you_styles.sidebar__link__wrapper} href="/settings">
            <div className={for_you_styles.sidebar__link__wrapper}>
                <div className={for_you_styles.sidebar__link__line} />
                <div className={for_you_styles.sidebar__link__icon}><FiSettings size={32}/></div>
              <div className={for_you_styles.sidebar__link__text}>settings</div>
            </div>
            </Link>

           <div className={for_you_styles.sidebar__link__wrapper}>
                <div className={for_you_styles.sidebar__link__line} />
                <div className={for_you_styles.sidebar__link__icon}><FiHelpCircle size={32}/></div>
              
              <div className={for_you_styles.sidebar__link__text}>help & support</div>
            </div>

             <div className={for_you_styles.sidebar__link__wrapper}>
                <div className={for_you_styles.sidebar__link__line} />
                <div className={for_you_styles.sidebar__link__icon}><FiLogOut size={32}/></div>
              <div className={for_you_styles.sidebar__link__text}>logout</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
