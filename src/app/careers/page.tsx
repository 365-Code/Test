"use client";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const listChildVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Page = () => {
  return (
    <section>
        <Layout>

      <div className="relative bg-gradient-to-b from-slate-400/50 to-slate-500/30">
        <div className="gap-4 flex flex-col md:flex-row w-full h-screen justify-between items-center container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 1 }}
            className="flex-1 space-y-4 md:basis-3/5 w-full"
          >
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-5xl font-bold"
            >
              Let&apos;s work <span className="dual-color-yellow">together</span>.
              Join Unfluke!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-full w-[450px]"
            >
              We&apos;re always open for new creative, analytical and technical minds
              to join our team. Search for the suitable job.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.5 }}
            className="grid grid-flow-col items-center gap-3"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex max-h-[300px] max-w-[300px] border-4 transition-all border-white"
            >
              <img
                src="https://unfluke.in/static/media/12.ddc218cd.jpg"
                alt=""
                className="cover-img"
              />
            </motion.div>
            <motion.div className="grid grid-rows-2 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex max-h-[300px] max-w-[300px] border-4 transition-all border-white"
              >
                <img
                  src="https://unfluke.in/static/media/14.0e24a12b.jpg"
                  alt=""
                  className="cover-img"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex max-h-[300px] max-w-[300px] border-4 transition-all border-white"
              >
                <img
                  src="https://unfluke.in/static/media/15.69a7b8d7.jpg"
                  alt=""
                  className="cover-img"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 overflow-hidden w-full">
          <svg
            className="w-full h-full"
            width="1440px"
            height="40px"
            viewBox="0 0 1440 40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="shape-b"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="curve" fill="#fff">
                <path
                  d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="container text-center flex flex-col gap-6 py-8"
      >
        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}>
          <span className="tag-blue">BENEFITS</span>
          <h2 className="text-center font-medium sm:text-3xl md:text-4xl">
            We take care of our team
          </h2>
          <p className="text-lg">Few benefits from working together</p>
        </motion.div>


        <motion.div className="grid sm:grid-cols-2">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              variants={listChildVariants}
              className="flex items-start gap-2 py-4"
            >
              <motion.span className="text-blue-500 p-1 text-2xl">
                <i className="fi fi-sr-smile-beam" />
              </motion.span>
              <motion.div className="text-left">
                <h3 className="font-semibold text-2xl">Fun Culture</h3>
                <p className="text-lg">
                  We truly make working a treat. You would want to stay in
                  office more!
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={listChildVariants}
              className="flex items-start gap-2 py-4"
            >
              <motion.span className="text-2xl text-blue-500 p-1">
                <i className="fi fi-sr-usd-circle" />
              </motion.span>
              <motion.div className="text-left">
                <h3 className="font-semibold text-2xl">Growth budget</h3>
                <p className="text-lg">
                  A specific budget for your professionals growth which you
                  spend on throughout the year
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={listChildVariants}
              className="flex items-start gap-2 py-4"
            >
              <motion.span className="text-2xl text-blue-500 p-1">
                <i className="fi fi-sr-marker" />
              </motion.span>
              <motion.div className="text-left">
                <h3 className="font-semibold text-2xl">Work from anywhere</h3>
                <p className="text-lg">
                  Work from anywhere you like. We offer remote working to all
                  the employees
                </p>
              </motion.div>
            </motion.div>
            {/* <i className="fi fi-sr-usd-circle" />
              <i className="fi fi-sr-microchip" /> */}
          </motion.div>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              variants={listChildVariants}
              className="flex items-start gap-2 py-4"
            >
              <motion.span className="text-2xl text-blue-500 p-1">
                <i className="fi fi-sr-microchip" />
              </motion.span>
              <motion.div className="text-left">
                <h3 className="font-semibold text-2xl">Technology</h3>
                <p className="text-lg">
                  A special training to get start with our technical stack by
                  professionals
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={listChildVariants}
              className="flex items-start gap-2 py-4"
            >
              <motion.span className="text-2xl text-blue-500 p-1">
                <i className="fi fi-sr-users" />
              </motion.span>
              <motion.div className="text-left">
                <h3 className="font-semibold text-2xl">
                  Team activities & retreats
                </h3>
                <p className="text-lg">
                  Many team building activities and retreat every quarter, so
                  you don&apos;t get bored
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={listChildVariants}
              className="flex items-start gap-2 py-4"
            >
              <motion.span className="text-2xl text-blue-500 p-1">
                <i className="fi fi-sr-mug-hot-alt" />
              </motion.span>
              <motion.div className="text-left">
                <h3 className="font-semibold text-2xl">Work/life balance</h3>
                <p className="text-lg">
                  Flexible work hours gives you complete balance with your
                  personal and professional life.
                </p>
              </motion.div>
            </motion.div>
            {/* <i className="fi fi-sr-usd-circle" />
              <i className="fi fi-sr-microchip" /> */}
          </motion.div>
        </motion.div>

      </motion.div>

      <div className="container grid grid-cols-2 gap-4 py-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{delay: 0.4}}
          whileInView={{ y: 0, opacity: 1 }}
          className="border p-4 flex flex-col gap-8"
        >
          <div>
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="text-base">
              Don&apos;t find suitable opening? We&apos;d still love to learn more about
              you. Contact us and we&apos;ll reach out to have interesting
              conversation!
            </p>
          </div>
          <Link href={"/contact"}>
            <button className="btn-primary-outline">Contact Us</button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{delay: 0.4}}
          className="border p-4 flex flex-col gap-8"
        >
          <div>
            <h3 className="text-2xl font-semibold">Meet the team</h3>
            <p className="text-base">
              Learn more about us and who all work at Unfluke. You will get
              chance to work with everyone in the team.
            </p>
          </div>
          <Link href={"/contact"}>
            <button className="btn-primary-outline">Meet Out Team</button>
          </Link>
        </motion.div>
      </div>
      </Layout>

    </section>
  );
};

export default Page;
