import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaPlay } from "react-icons/fa";
import ForYou_style from "../components/For_you.module.css";

export default function For_you() {
  return (
    <div className={ForYou_style.wrapper}>
      {/* Search Section */}
      <div className={ForYou_style.search__background}>
        <div className={ForYou_style.search__wrapper}>
          
          <div className={ForYou_style.search__content}>
            <div className={ForYou_style.search}>
              <div className={ForYou_style.search__inputWrapper}>
                <input
                  className={ForYou_style.search__input}
                  placeholder="Search for books"
                  type="text"
                  
                />
                <div className={ForYou_style.search__icon}>
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
          <div className={ForYou_style.sidebar__toggleBtn}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              ></path>
            </svg>
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
            <Link href="/for-you" className={ForYou_style.sidebar__linkWrapper}>
              <div className={`${ForYou_style.sidebar__linkLine} ${ForYou_style.activeTab}`}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <FaPlay />
              </div>
              <div className={ForYou_style.sidebar__linkText}>For you</div>
            </Link>

            <Link href="/library" className={ForYou_style.sidebar__linkWrapper}>
              <div className={ForYou_style.sidebar__linkLine}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                {/* Library Icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                </svg>
              </div>
              <div className={ForYou_style.sidebar__linkText}>My Library</div>
            </Link>
          </div>

          {/* Sidebar Bottom */}
          <div className={ForYou_style.sidebar__bottom}>
            <Link href="/settings" className={ForYou_style.sidebar__linkWrapper}>
              <div className={ForYou_style.sidebar__linkLine}></div>
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
              <div className={ForYou_style.selected__book__content }>
                How Constant Innovation Creates Radically Successful Businesses
              </div>
              <div className={ForYou_style.selected__book__line}></div>
              < img src="content_img.png" className={ForYou_style.selected__bookContent}/>
                
                <div className={ForYou_style.selected__book__text}>
                  <div className={ForYou_style.selected__bookTitle}>The Lean Startup</div>
                  <div className={ForYou_style.selected__bookAuthor}>Eric Ries</div>
                  <div className={ForYou_style.selected__bookDurationWrapper}>
                    <div className={ForYou_style.selected__bookIcon}>
                      <FaPlay />
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
