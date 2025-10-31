"use client";
import  style_BookDetails from "./BookDetails.module.css"
import {   FaLightbulb, FaBook, FaPlay } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi2"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function BookDetails() {
  return (
    <div className={style_BookDetails.row}>
      <div className={style_BookDetails.container}>
        <div className={style_BookDetails.inner__wrapper}>
          <div className={style_BookDetails.inner__book}>
            <div className={style_BookDetails.inner__book__title}>The Lean Startup (Premium)</div>
            <div className={style_BookDetails.inner__book__author}>Eric Ries</div>
            <div className={style_BookDetails.inner__book__sub__title}>
              How Constant Innovation Creates Radically Successful Businesses
            </div>

            {/* Book Info */}
            <div className={style_BookDetails.inner__book__wrapper}>
              <div className={style_BookDetails.inner__book__description__wrapper}>

                <div className={style_BookDetails.inner__book__description}>
                  <FaRegStar  background-color="white"className={style_BookDetails.inner__book__icon} />
                  <div className={style_BookDetails.inner__book__overall__rating}>4.6&nbsp;</div>
                  <div className={style_BookDetails.inner__book__total__rating}>(981 ratings)</div>
                </div>

                <div className={style_BookDetails.inner__book__description}>
                  <FaRegClock className={style_BookDetails.inner__book__icon} />
                  <div className={style_BookDetails.inner__book__duration}>03:23</div>
                </div>

                <div className={style_BookDetails.inner__book__description}>
                  <FaMicrophone   className={style_BookDetails.inner__book__icon}/>
                  <div className={style_BookDetails.inner__book__type}>Audio & Text</div>
                </div>

                <div className={style_BookDetails.inner__book__description}>
                  <HiOutlineLightBulb className={style_BookDetails.inner__book__icon} />
                  <div className={style_BookDetails.inner__book__key__ideas}>11 Key Ideas</div>
                </div>

              </div>
            </div>

            {/* Buttons */}
            <div className={style_BookDetails.inner__book__read__btn__wrapper}>
              <Link href="/read/the-lean-startup">
                <button className={style_BookDetails.inner__book__read__btn}>
                  <div className={style_BookDetails.inner__book__read__icon}>
                    <FaBook />
                  </div>
                  <div className={style_BookDetails.inner__book__read__text}>Read</div>
                </button>
              </Link>

              <Link href="/listen/the-lean-startup">
                <button className={style_BookDetails.inner__book__read__btn}>
                  <div className={style_BookDetails.inner__book__read__icon}>
                    <FaPlay />
                  </div>
                  <div className={style_BookDetails.inner__book__read__text}>Listen</div>
                </button>
              </Link>
            </div>

            {/* Bookmark */}
            <div className={style_BookDetails.inner__book__bookmark}>
              <div className={style_BookDetails.inner__book__bookmark__icon}>
                <faBookOpen className={style_BookDetails.book_icon} />
              </div>
              <div className={style_BookDetails.inner__book__bookmark__text}>Add title to My Library</div>
            </div>
            {/* Book Description */}
            <div className={style_BookDetails.inner__book__secondary__title}>What's it about?</div>
            <div className={style_BookDetails.inner__book__tags__wrapper}>
              <div className={style_BookDetails.inner__book__tag}>Productivity</div>
              <div className={style_BookDetails.inner__book__tag}>Personal Development</div>
            </div>

            <div className={style_BookDetails.inner__book__book__description}>
             The Lean Startup" is a book written by entrepreneur and startup advisor Eric Ries. First published in 2011, the book presents a methodology for building and scaling startups in a more efficient and effective manner. The approach emphasizes continuous experimentation, rapid iteration, and customer feedback, with the goal of creating a product or service that meets the needs of the market. The book introduces the concept of a minimum viable product (MVP), which is a version of the product that has just enough features to satisfy early customers and provide feedback for further development. Ries also discusses the importance of validated learning, which involves testing assumptions and hypotheses through experiments and data analysis. "The Lean Startup" has been widely read and praised for its practical and actionable advice, and has become a popular resource for entrepreneurs and startups looking to build successful and sustainable businesses.
            </div>

            {/* Author Section */}
            <h2 className={style_BookDetails.inner__book__secondary__title}>About the author</h2>
            <div className={style_BookDetails.inner__book__author__description}>
            Eric Ries is an entrepreneur, author, and startup advisor. Born in 1978 in California, Ries graduated from Yale University with a degree in computer science. He went on to co-found several startups, including IMVU, a 3D avatar-based social networking platform, and later became an advisor and mentor to numerous other startups. Ries is best known for his book "The Lean Startup," which introduced a new approach to building and scaling startups based on continuous experimentation and customer feedback. He is also a frequent speaker and consultant on entrepreneurship, innovation, and management, and has been featured in numerous media outlets, including The New York Times, The Wall Street Journal, and Forbes. Ries has received several awards for his contributions to the startup community, and his work has influenced many entrepreneurs and startups around the world.
            </div>
          </div>

          {/* Book Image */}
          <div className={style_BookDetails.inner_book__img_wrapper}>
            <figure
              className={style_BookDetails.book__image__wrapper }
    
            >
              <img
                className={style_BookDetails.book__image}
                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
                alt="The Lean Startup book cover"
                style={{ display: "block" }}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}