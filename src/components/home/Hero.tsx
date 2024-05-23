"use client";
import { motion } from "framer-motion";
import React from "react";

const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.4,
      when: "beforeChildren"
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition:{
      type: "tween"
    }
  },
};

const Hero = () => {
  return (
    <main className="container p-4 relative flex items-center sm:flex-col md:flex-row md:justify-between">
      <motion.div
        variants={mainVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col transition-all gap-8 text-center md:text-start md:basis-1/2"
      >
        <motion.h1
          variants={childVariant}
          className="text-3xl leading-8 font-bold sm:text-4xl md:text-5xl"
        >
          One stop solution to test your{" "}
          <span className="dual-color-green">Strategy</span> ideas
        </motion.h1>
        <motion.p
          variants={childVariant}
          className="text-base sm:text-lg md:text-xl"
        >
          As we are launching a Beta soon, we are giving away 1 month FREE
          subscription to our early backers. Sign up below to get FREE
          subscription.
        </motion.p>

        <motion.div
          variants={childVariant}
          className="flex flex-col items-start gap-6"
        >
          <button className="btn-primary-outline">Sign Up</button>
          <div className="flex items-center gap-1 sm:gap-8">
            <p className="flex items-center sm:gap-2 text-sm sm:text-base">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather text-green-500 feather-check icon icon-dual-success icon-xs me-1"
              >
                <g>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </g>
              </svg>
              <span> Free 30-day subscription </span>
            </p>
            <p className="flex items-center sm:gap-2 text-sm sm:text-base">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather text-green-500 feather-check icon icon-dual-success icon-xs me-1"
              >
                <g>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </g>
              </svg>
              <span>No credit card needed</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute top-0 left-0 -z-[1] opacity-30 h-[80%] w-[80%] md:relative md:basis-1/2">
        <img
          src="https://unfluke.in/static/media/g10.f644e042.png"
          alt="hero-right"
        />
      </div>
    </main>
  );
};

export default Hero;
