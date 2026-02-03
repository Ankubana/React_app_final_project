"use client";

import for_you_styles from "./For_you.module.css";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  BookmarkIcon,
  ArrowRightOnRectangleIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { FaPlay } from "react-icons/fa";

export default function Landing() {
  const pathname = usePathname();
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const { data } = await axios.get(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
      setOpen(true)
    }
    fetchBooks();
  }, []);

  return (
    <>
      {open && (
        <div className={for_you_styles.wrapper}>
          <div className={for_you_styles.search__background}>
            <div className={for_you_styles.search__wrapper}>
              <figure>
                <img src="logo" alt="" />
              </figure>
              <div className={for_you_styles.search__content}>
                <div className={for_you_styles.search}>
                  <div className={for_you_styles.search__input__wrapper}>
                    <input
                      className={for_you_styles.search__input}
                      placeholder="Search for books"
                      type="text"
                    />
                    <div className={for_you_styles.search__icon}>
                      <MagnifyingGlassIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${for_you_styles.sidebar__overla} ${for_you_styles.sidebar__overlay__hidden}`}
            />
          </div>

          <div className={`${for_you_styles.sidebar} ${for_you_styles.sidebar__closed}`}>
            <div className={for_you_styles.sidebar__logo}>
              <img src="/logo.png" alt="Logo" className={for_you_styles.logo} />
            </div>
            <div className={for_you_styles.sidebar__wrapper}>
              <div className={for_you_styles.sidebar__top}>
                <Link
                  className={for_you_styles.sidebar__link__wrapper}
                  href="/for-you"
                >
                  <div
                    className={`${for_you_styles.sidebar__link_line} ${
                      pathname === "/for-you" ? for_you_styles.active__tab : ""
                    }`}
                  ></div>
                  <div className={for_you_styles.sidebar__icon__wrapper}>
                    <HomeIcon/>
                  </div>
                  <div className={for_you_styles.sidebar__link__text}>For you</div>
                </Link>

                <a
                  className={for_you_styles.sidebar__link__wrapper}
                  href="/library"
                >
                  <div
                    className={`${for_you_styles.sidebar__link_line} ${
                      pathname === "/for-you" ? for_you_styles.active__tab : ""
                    }`}
                  ></div>
                  <div className={for_you_styles.sidebar__icon__wrapper}>
                    <BookmarkIcon />
                  </div>
                  <div className={for_you_styles.sidebar__link__text}>My Library</div>
                </a>

                <div
                  className={`${for_you_styles.sidebar__link__wrapper} ${for_you_styles.sidebar__link__not_allowed}`}
                >
                  <div className={for_you_styles.sidebar__link_line}></div>
                  <div className={for_you_styles.sidebar__icon__wrapper}>
                    <PencilIcon />
                  </div>
                  <div className={for_you_styles.sidebar__link__text}>Highlights</div>
                </div>

                <div className={for_you_styles.sidebar__link__wrapper}>
                  <div className={for_you_styles.sidebar__link_line}></div>
                  <div className={for_you_styles.sidebar__icon__wrapper}>
                    <MagnifyingGlassIcon />
                  </div>
                  <div className={for_you_styles.sidebar__link__text}>Search</div>
                </div>
              </div>

              <div className={for_you_styles.for_you_stylessidebar__bottom}>
                <a
                  className={for_you_styles.sidebar__link__wrapper}
                  href="/settings"
                >
                  <div
                    className={`${for_you_styles.sidebar__link_line} ${
                      pathname === "/settings" ? for_you_styles.active__tab : ""
                    }`}
                  />
                  <div className={for_you_styles.sidebar__icon__wrapper}>
                    <Cog6ToothIcon />
                  </div>
                  <div className={for_you_styles.sidebar__link__text}>Settings</div>
                </a>

                <div
                  className={`${for_you_styles.sidebar__link__wrapper} ${for_you_styles.sidebar__link__not_allowed}`}
                >
                  <div className={for_you_styles.sidebar__link_line}></div>
                  <div className={for_you_styles.sidebar__icon__wrapper}>
                    <QuestionMarkCircleIcon />
                  </div>
                  <div className={for_you_styles.sidebar__link__text}>Help & Support</div>
                </div>

                <div className={for_you_styles.sidebar__link__wrapper}>
                  <div className={for_you_styles.sidebar__link_line}></div>
                  <div className={for_you_styles.sidebar__icon__wrapper}>
                    <ArrowRightOnRectangleIcon />
                  </div>
                  <div className={for_you_styles.sidebar__link__text}>Logout</div>
                </div>
              </div>
            </div>
          </div>

          <div className={for_you_styles.row}>
            <div className={for_you_styles.container}>
              <div className={for_you_styles.for_you__wrapper}>
                <div className={for_you_styles.for__you__title}>
                  Selected just for you
                </div>
                <a
                  className={for_you_styles.selected__book}
                  href="/book/f9gy1gpai8"
                >
                  <div className={for_you_styles.selected__book__sub_title}>
                    How Constant Innovation Creates Radically Successful Businesses
                  </div>
                  <div className={for_you_styles.selected__book__line}></div>
                  <div className={for_you_styles.selected__book__content}>
                    <figure className={for_you_styles.selected__book__icon}>
                      {books.map((userData) => (
                        <img
                          key={userData.id || userData.imageLink}
                          src={userData.imageLink}
                          className={for_you_styles.book__img}
                          alt={userData.title || "Book"}
                        />
                      ))}
                    </figure>
                    <div className={for_you_styles.selected__book__text}>
                      <div className={for_you_styles.selected__book__title}>
                        The Lean Startup
                      </div>
                      <div className={for_you_styles.selected__book__author}>
                        Eric Ries
                      </div>
                      <div
                        className={for_you_styles.selected__book__duration_wrapper}
                      >
                        <div className={for_you_styles.audio_wrapper}>
                        <div className={for_you_styles.audio}>
                          <FaPlay />
                        </div>
                        <div className={for_you_styles.selected__book__duration}>
                          3 mins 23 secs
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
