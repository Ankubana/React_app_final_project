"use client";

import { useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import Plan_styles from "../components/plan.module.css";

export default function PlanFeatures() {
  const [activePlan, setActivePlan] = useState("yearly");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handlePlanClick = (selectedPlan) => {
    setActivePlan(selectedPlan);
  };

  const faqs = [
    {
      question: "How does the free 7-day trial work?",
      answer:
        "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires.",
    },
    {
      question:
        "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
      answer:
        "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
    },
    {
      question: "What's included in the Premium plan?",
      answer:
        "Premium membership provides unrestricted access to best-selling books, high-quality audio, offline downloads, and the option to send reads to your Kindle.",
    },
    {
      question: "Can I cancel during my trial or subscription?",
      answer:
        "You will not be charged if you cancel your trial before its conclusion. You can still read one curated book per day after cancelling.",
    },
  ];

  return (
    <div className={`${Plan_styles.wrapper} ${Plan_styles.wrapper__full}`}>
      <div
        className={`${Plan_styles.sidebar__overlay} ${Plan_styles.sidebar__overlay__hidden}`}
      ></div>
      <div className={Plan_styles.plan}>
        <div className={Plan_styles.plan__header__wrapper}>
          <div className={Plan_styles.plan__header}>
            <div className={Plan_styles.plan__title}>
              Get unlimited access to many amazing books to read
            </div>
            <div className={Plan_styles.plan__sub__title}>
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className={Plan_styles.plan__img__mask}>
              <img
                alt="pricing"
                src="pricing-top.jpg"
                width="860"
                height="722"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        {/* Features */}
        <div className={Plan_styles.plan__features__wrapper}>
          <div className={Plan_styles.plan__features}>
            <figure className={Plan_styles.plan__features__icon}>
              <AiFillFileText size={60} color="currentColor" />
            </figure>
            <div className={Plan_styles.plan__features__text}>
              <b>Key ideas in few minutes</b> with many books to read
            </div>
          </div>

          <div className={Plan_styles.plan__features}>
            <figure className={Plan_styles.plan__features__icon}>
              <img src="seedling.png" alt="growth" />
            </figure>
            <div className={Plan_styles.plan__features__text}>
              <b>3 million</b> people growing with Summarist everyday
            </div>
          </div>

          <div className={Plan_styles.plan__features}>
            <figure className={Plan_styles.plan__features__icon}>
              <FaHandshake size={60} color="currentColor" />
            </figure>
            <div className={Plan_styles.plan__features__text}>
              <b>Precise recommendations</b> collections curated by experts
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className={Plan_styles.section__title}>
          Choose the plan that fits you
        </div>

        <div
          className={`${Plan_styles.plan__card} ${
            activePlan === "yearly" ? Plan_styles.plan__card__active : ""
          }`}
          onClick={() => handlePlanClick("yearly")}
        >
          <div className={Plan_styles.plan__card__circle}>
            <div
              className={`${Plan_styles.plan__card__dot} ${
                activePlan === "yearly" ? Plan_styles.plan__card__dot__active : ""
              }`}
            ></div>
          </div>
          <div className={Plan_styles.plan__card__content}>
            <div className={Plan_styles.plan__card__title}>
              Premium Plus Yearly
            </div>
            <div className={Plan_styles.plan__card__price}>$99.99/year</div>
            <div className={Plan_styles.plan__card__text}>
              7-day free trial included
            </div>
          </div>
        </div>

        <div className={Plan_styles.plan__card__separator}>
          <div className={Plan_styles.plan__separator}>or</div>
        </div>

        <div
          className={`${Plan_styles.plan__card} ${
            activePlan === "monthly" ? Plan_styles.plan__card__active : ""
          }`}
          onClick={() => handlePlanClick("monthly")}
        >
          <div className={Plan_styles.plan__card__circle}>
            <div
              className={`${Plan_styles.plan__card__dot} ${
                activePlan === "monthly"
                  ? Plan_styles.plan__card__dot__active
                  : ""
              }`}
            ></div>
          </div>
          <div className={Plan_styles.plan__card__content}>
            <div className={Plan_styles.plan__card__title}>
              Premium Plus Monthly
            </div>
            <div className={Plan_styles.plan__card__price}>$9.99/month</div>
            <div className={Plan_styles.plan__card__text}>
              No trial included
            </div>
          </div>
        </div>

        <div className={Plan_styles.plan__card__cta}>
          <div className={Plan_styles.btn__wrapper}>
            <button className={Plan_styles.btn}>
              <span>
                {activePlan === "yearly"
                  ? "Start your free 7-day trial"
                  : "Start your first month"}
              </span>
            </button>
            <div className={Plan_styles.plan__disclaimer}>
              {activePlan === "yearly"
                ? "Cancel anytime before the trial ends."
                : "30-day money-back guarantee."}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className={Plan_styles.faq__wrapper}>
          {faqs.map((faq, index) => (
            <div key={index} className={Plan_styles.accordion__card}>
              <div
                className={Plan_styles.accordion__header}
                onClick={() => toggleFAQ(index)}
              >
                <div className={Plan_styles.accordion__title}>
                  {faq.question}
                </div>
                <BsChevronDown
                  className={`${Plan_styles.accordion__icon} ${
                    openIndex === index ? Plan_styles.open : ""
                  }`}
                  size={24}
                />
              </div>
              {openIndex === index && (
                <div className={Plan_styles.accordion__body}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}