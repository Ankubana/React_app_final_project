"use client"

import Image from "next/image";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";
import { FaHighlighter } from "react-icons/fa";
import { FaSearch,FaPlay } from "react-icons/fa";
import ForYou_style from "../components/For_you.module.css";
import { BsBookmark } from "react-icons/bs";
export default function For_you() {
  return (
    <div className={ForYou_style.wrapper}>
      {/* Search Section */}
      <div className={ForYou_style.search__background}>
        <div className={ForYou_style.For_you_search__wrapper }>
          
          <div className={ForYou_style.search__content}>
            <div className={ForYou_style.search}>
              <div className={ForYou_style.search__inputWrapper}>
                <input
                  className={ForYou_style.search__input}
                  placeholder="Search for books"
                  type="text"
                  
                />
                <div className={ForYou_style.search__icon}>
                  <FaSearch   />
                </div>
              </div>
            </div>
          </div>
          <div className={ForYou_style.sidebar__toggleBtn}>
            
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div className={`${ForYou_style.sidebar__overlay} ${ForYou_style.sidebar__overlayHidden}`}></div>

      {/* Sidebar */}
      <div className={`${ForYou_style.sidebar} ${ForYou_style.sidebarClosed}`}>
        <div className={ForYou_style.sidebar__logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={50}
          />
        </div>
        <div className={ForYou_style.sidebar__wrapper}>
          <div className={ForYou_style.sidebar__top}>
            <Link href="/for-you" className={ForYou_style.sidebar__link__wrapper}>
              <div className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <HomeOutlined className={ForYou_style.anticon} />
              </div>
              <div className={ForYou_style.sidebar__linkText}>For you</div>
            </Link>
            <Link href="/for-you" className={ForYou_style.sidebar__link__wrapper}>
              <div className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <BsBookmark className={ForYou_style.sidebar__iconWrapper} />
              </div>
              <div className={ForYou_style.sidebar__linkText}> My Library</div>
            </Link>
            <Link href="/for-you" className={ForYou_style.sidebar__link__wrapper}>
              <div className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <FaHighlighter />
              </div>
              <div className={ForYou_style.sidebar__linkText}> Highlights</div>
            </Link>
            <Link href="/for-you" className={ForYou_style.sidebar__link__wrapper}>
              <div className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <FaSearch/>
              </div>
              <div className={ForYou_style.sidebar__linkText}> &nbsp;&nbsp;Highlights</div>
            </Link>
          </div>

          {/* Sidebar Bottom */}
          <div className={ForYou_style.sidebar__bottom}>
            <Link href="/settings" className={ForYou_style.sidebar__linkWrapper}>
              <div className={ForYou_style.sidebar__link_line}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                {/* Settings Icon */}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div className={ForYou_style.sidebar__linkText}>Settings</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={ForYou_style.row}>
        <div className={ForYou_style.container}>
          <div className={ForYou_style.forYou__wrapper}>
            <div className={ForYou_style.for_you__title}>Selected just for you</div>

            <Link href="/book/f9gy1gpai8" className={ForYou_style.selected__book}>
              <div className={ForYou_style.selected__book__sub_title  }>
                How Constant Innovation Creates Radically Successful Businesses
              </div>
              <div className={ForYou_style.selected__book__line}></div>
              <img src="content_img.png" className={ForYou_style.selected__bookContent}/>
                
                <div className={ForYou_style.selected__book__text}>
                  <div className={ForYou_style.selected__booktTitle}>The Lean Startup</div>
                  <div className={ForYou_style.selected__book__author}>Eric Ries</div>
                  <div className={ForYou_style.selected__bookDurationWrapper}>
                    <div className={ForYou_style.selected__bookIcon}>
                      <FaPlay  className={ForYou_style.selected__book__iconImg}/>
                    </div>
                    <div className={ForYou_style.selected__bookDuration}>3 mins 23 secs</div>
                  </div>
                </div>
              
            </Link>

            <div className={ForYou_style.forYou__title}>Recommended For You</div>
            <div className={ForYou_style.forYou__subTitle}>We think you’ll like these</div>
          </div>
        </div>
      </div>
    </div>
  );
}
