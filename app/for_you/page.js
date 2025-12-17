"use client";
import landing_styles from "./for_you.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Landing() {
  return (
    <section className={landing_styles.landing}>
      <div className={landing_styles.container}>
        <div className={landing_styles.row}>
          <div className={landing_styles.landing__wrapper}>
            <div className={landing_styles.landing__content}>
              <div className={landing_styles.landing__content__title}>
                Gain more knowledge <br className="Remove__tablet" />
                in less time
              </div>

              <div className={landing_styles.landing__content__subtitle}>
                Great summaries for busy people,
                <br className="Remove__tablet" />
                individuals who barely have time to read,
                <br className="Remove__tablet" />
                and even people who don’t like to read.
              </div>
              <Link
  href="/for_you"
  className={`${landing_styles.btn} ${landing_styles.home__cta__btn}`}
>
  Login
</Link>
            </div>
            <figure className={landing_styles.landing__img__wrapper}>
              <Image
                src="/landing.png"
                alt="card"
                width={500}
                height={500}
                className={landing_styles.landing_img}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
