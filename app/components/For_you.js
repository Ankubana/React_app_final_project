"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";
import { FaHighlighter, FaSearch, FaPlay } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import ForYou_style from "../components/For_you.module.css";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
export default function For_you() {
  return (
    <div className={ForYou_style.wrapper}>
      {/* Search Section */}
      <div className={ForYou_style.search__background}>
        <div className={ForYou_style.For_you_search__wrapper}>
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
          <div className={ForYou_style.sidebar__toggleBtn}></div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`${ForYou_style.sidebar__overlay} ${ForYou_style.sidebar__overlayHidden}`}
      ></div>

      {/* Sidebar */}
      <div
        className={`${ForYou_style.sidebar} ${ForYou_style.sidebarClosed}`}
      >
        <div className={ForYou_style.sidebar__logo}>
          <Image src="/logo.png" alt="Logo" width={200} height={50} />
        </div>

        <div className={ForYou_style.sidebar__wrapper}>
          <div className={ForYou_style.sidebar__top}>
            <Link href="/for-you" className={ForYou_style.sidebar__link__wrapper}>
              <div
                className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}
              ></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <HomeOutlined className={ForYou_style.anticon} />
              </div>
              <div className={ForYou_style.sidebar__linkText}>For you</div>
            </Link>

            <Link href="/library" className={ForYou_style.sidebar__link__wrapper}>
              <div
                className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}
              ></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <BsBookmark className={ForYou_style.anticon_libr} />
              </div>
              <div className={ForYou_style.sidebar__linkText}>My Library</div>
            </Link>

            <Link href="/highlights" className={ForYou_style.sidebar__link__wrapper}>
              <div
                className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}
              ></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <FaHighlighter className={ForYou_style.anticon} />
              </div>
              <div className={ForYou_style.sidebar__linkText}>Highlights</div>
            </Link>

            <Link href="/search" className={ForYou_style.sidebar__link__wrapper}>
              <div
                className={`${ForYou_style.sidebar__link_line} ${ForYou_style.active__tab}`}
              ></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <FaSearch className={ForYou_style.anticon} />
              </div>
              <div className={ForYou_style.sidebar__linkText}>Search</div>
            </Link>
          </div>

          {/* Sidebar Bottom */}
          <div className={ForYou_style.sidebar__bottom}>
            <Link href="/settings" className={ForYou_style.sidebar__link__wrapper}>
              <div className={ForYou_style.sidebar__link_line}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <FiSettings className={ForYou_style.anticon}/>
              </div>
              <div className={ForYou_style.sidebar__linkText}>Settings</div>
            </Link>

            <Link href="/support" className={ForYou_style.sidebar__link__wrapper}>
              <div className={ForYou_style.sidebar__link_line}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
                <BsQuestionCircle className={ForYou_style.anticon}/>
              </div>
              <div className={ForYou_style.sidebar__linkText}>
                Help & Support
              </div>
            </Link>

            <Link href="/login" className={ForYou_style.sidebar__link__wrapper}>
              <div className={ForYou_style.sidebar__link_line}></div>
              <div className={ForYou_style.sidebar__iconWrapper}>
               < FiLogIn className={ForYou_style.anticon}/>
              </div>
              <div className={ForYou_style.sidebar__linkText}>Login</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={ForYou_style.row}>
        <div className={ForYou_style.container}>
          <div className={ForYou_style.forYou__wrapper}>
            <div className={ForYou_style.for_you__title}>
              Selected just for you
            </div>

            <Link href="/book/f9gy1gpai8" className={ForYou_style.selected__book}>
              <div className={ForYou_style.selected__book__sub_title}>
                How Constant Innovation Creates Radically Successful Businesses
              </div>
              <div className={ForYou_style.selected__book__line}></div>
              <img
                src="content_img.png"
                className={ForYou_style.selected__bookContent}
                alt="Book"
              />
              <div className={ForYou_style.selected__book__text}>
                <div className={ForYou_style.selected__booktTitle}>
                  The Lean Startup
                </div>
                <div className={ForYou_style.selected__book__author}>
                  Eric Ries
                </div>
                <div className={ForYou_style.selected__bookDurationWrapper}>
                  <div className={ForYou_style.selected__bookIcon}>
                    <FaPlay className={ForYou_style.selected__book__iconImg} />
                  </div>
                  <div className={ForYou_style.selected__bookDuration}>
                    3 mins 23 secs
                  </div>
                </div>
              </div>
            </Link>

            <div className={ForYou_style.for__you__title}>
              Recommended For You
            </div>
            <div className={ForYou_style.for__you__sub__title}>
              We think you’ll like these
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
