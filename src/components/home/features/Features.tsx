"use client";
import React from "react";
import { delay, motion } from "framer-motion";

const featureTitleVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
    },
  },
};

const featureLImgVariant = {
  hidden: {
    opacity: 0,
    x: "-30vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  },
};

const featureRImgVariant = {
  hidden: {
    opacity: 0,
    x: "30vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "string",
    },
  },
};

const featureTextVariant = {
  hidden: {
    opacity: 0,
    y: -150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      staggerChildren: 0.4,
    },
  },
};

const featureTextChildVariant = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const featuresList = [
  {
    img: "https://unfluke.in/static/media/f1.e33baefd.jpg",
    alt: "feature-1",
    title: "HISTORICAL INTRADAY CHARTS",
    list: [
      {
        icon: <i className="fi fi-sr-user-add" />,
        title: "Different Segments Charts",
        desc: "Get historical intraday charts of Equity, Futures and Options.",
      },
      {
        icon: <i className="fi fi-sr-signal-alt-2" />,
        title: "Data since 2017",
        desc: "Currently we have data since 2017 and its updated real time.",
      },
    ],
  },
  {
    img: "https://unfluke.in/static/media/f3.3df99212.jpg",
    alt: "feature-1",
    title: "HISTORICAL SCANNER",
    list: [
      {
        icon: <i className="fi fi-sr-user-add" />,
        title: "Different Segments Scanner",
        desc: "Check scanner results using a combination of different indicators and time frames.",
      },
      {
        icon: <i className="fi fi-sr-signal-alt-2" />,
        title: "Data since 2017 for FNO",
        desc: "Get scanner results of even Futures and Options (intraday) since 2017",
      },
    ],
  },
  {
    img: "https://unfluke.in/static/media/f5.f9f7e727.jpg",
    alt: "feature-1",
    title: "BACKTEST STRATEGIES",
    list: [
      // {
      //   title: "Different Segments Scanner",
      //   desc: "Check scanner results using a combination of different indicators and time frames.",
      // },
      // {
      //   title: "Data since 2017 for FNO",
      //   desc: "Get scanner results of even Futures and Options (intraday) since 2017",
      // },
    ],
  },
  {
    img: "https://unfluke.in/static/media/f6.23c25236.png",
    alt: "feature-1",
    title: "ADVANCE BACKTEST STRATEGIES",
    list: [
      // {
      //   title: "Different Segments Scanner",
      //   desc: "Check scanner results using a combination of different indicators and time frames.",
      // },
      // {
      //   title: "Data since 2017 for FNO",
      //   desc: "Get scanner results of even Futures and Options (intraday) since 2017",
      // },
    ],
  },
];

const Features = () => {
  return (
    <section className="container my-2 flex flex-col gap-4">
      <motion.div
        variants={featureTitleVariant}
        initial="hidden"
        viewport={{ once: true }}
        // animate="visible"
        whileInView={"visible"}
        className="flex flex-col text-center gap-1 py-4 items-center"
      >
        <span className="tag tag-blue">Features</span>
        <h2 className="text-4xl font-medium">
          Excellent Features. Excellent Results
        </h2>
        <p className="text-base font-medium">
          Start working with <span className="tag-blue-text">Unfluke</span> to
          manage all your strategies
        </p>
      </motion.div>
      {featuresList.map((ftr, i) => (
        <div key={i}>
          {(i + 1) % 2 == 1 ? (
            <div className="py-8 flex flex-col md:flex-row gap-8 justify-between items-center">
              <motion.div
                variants={featureLImgVariant}
                viewport={{ once: true }}
                initial="hidden"
                whileInView={"visible"}
                className="feature-1-bg basis-[50%]"
              >
                <img src={ftr.img} alt={ftr.alt} />
              </motion.div>
              <motion.div
                variants={featureTextVariant}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                className="basis-[45%] flex flex-col gap-4 py-4"
              >
                <h2 className="uppercase font-medium text-2xl sm:text-3xl md:text-4xl">
                  {ftr.title}
                </h2>
                {ftr.list.map((lst, i) => (
                  <div key={i}>
                    <motion.div
                      variants={featureTextChildVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span
                        className={` ${
                          i == 0 ? "tag-orange" : "tag-green"
                        } p-2 border-black rounded-lg`}
                      >
                        {lst.icon}
                      </span>
                      <button autoFocus className="text-left group/feature">
                        <h3 className="text-xl sm:text-2xl font-medium">
                          {lst.title}
                        </h3>
                        <p className="group-focus/feature:min-h-8 group-focus/feature:h-auto h-0 min-h-0 overflow-hidden transition-all">
                          {lst.desc}
                        </p>
                      </button>
                    </motion.div>
                    {i + 1 < ftr.list.length && <hr />}
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            <div className="py-8 flex gap-12 flex-col md:flex-row-reverse items-center">
              <motion.div
                variants={featureRImgVariant}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                className="feature-2-bg basis-[50%]"
              >
                <img src={ftr.img} alt={ftr.title} />
              </motion.div>
              <motion.div
                variants={featureTextVariant}
                viewport={{ once: true }}
                initial="hidden"
                whileInView={"visible"}
                className="basis-[45%] flex flex-col gap-4 py-4"
              >
                <h2 className="uppercase font-medium text-2xl sm:text-3xl md:text-4xl">
                  {ftr.title}
                </h2>
                {ftr.list.map((lst, i) => (
                  <div key={i}>
                    <motion.div
                      variants={featureTextChildVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span
                        className={` ${
                          i == 0 ? "tag-orange" : "tag-green"
                        } p-2 border-black rounded-lg`}
                      >
                        {lst.icon}
                      </span>
                      <button autoFocus className="text-left group/feature">
                        <h3 className="text-xl sm:text-2xl font-medium">
                          {lst.title}
                        </h3>
                        <p className="group-focus/feature:min-h-8 group-focus/feature:h-auto h-0 min-h-0 overflow-hidden transition-all">
                          {lst.desc}
                        </p>
                      </button>
                    </motion.div>

                    {i + 1 < ftr.list.length && <hr />}
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Features;
