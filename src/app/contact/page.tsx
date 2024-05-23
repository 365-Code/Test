"use client";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import React from "react";

const Page = () => {
  return (
    <div>
      <Layout>
        <section className="relative bg-gradient-to-b from-slate-400/50 to-slate-500/30">
          <div className="container text-center h-[300px] flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.4 }}
            >
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Please fill out the following form and we will get back to you
                shortly
              </motion.p>
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
        </section>
        <section className="container py-12">
          <motion.div
            initial={{ x: -40, opacity: 0, scale: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            className="border max-w-full w-[580px] p-8 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl font-medium">Let&apos;s Talk Further</h2>
              <p>
                Please fill out the following form and we will get back to you
                shortly
              </p>
            </div>

            <form action="" className="flex flex-col gap-4">
              <div className="flex gap-4 justify-between items-center">
                <div className="w-full">
                  <p>First Name</p>
                  <input
                    type="text"
                    className="p-2 w-full outline-slate-200 outline-1 outline focus-within:outline-blue-400 transition-all"
                  />
                </div>
                <div className="w-full">
                  <p>Last Name</p>
                  <input
                    type="text"
                    className="p-2 w-full outline-slate-200 outline-1 outline focus-within:outline-blue-400 transition-all"
                  />
                </div>
              </div>

              <div className="w-full">
                <p>Email</p>
                <input
                  type="text"
                  className="p-2 w-full outline-slate-200 outline-1 outline focus-within:outline-blue-400 transition-all"
                />
              </div>

              <div className="w-full">
                <p>Message</p>
                <textarea className="p-2 w-full outline-slate-200 outline-1 outline focus-within:outline-blue-400 transition-all" />
              </div>

              <button className="flex items-center gap-1 w-fit btn-primary-neon p-2">
                <span>Send</span>
                <span>
                  <i className="fi fi-sr-paper-plane" />
                </span>
              </button>
            </form>
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.5 }}
          className="container flex flex-col sm:flex-row items-start sm:items-center flex-wrap justify-start sm:justify-between gap-6 py-10"
        >
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex gap-2"
          >
            <span className="h-fit p-2 rounded-lg bg-blue-300 text-blue-500 text-xl">
              <i className="fi fi-rr-envelope" />
            </span>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>contact@unfluke.in</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex gap-2"
          >
            <span className="h-fit p-2 rounded-lg bg-orange-300 text-orange-500 text-xl">
              <i className="fi fi-rr-phone-call" />
            </span>
            <div>
              <h3 className="font-semibold">Phone (Only Whatsapp)</h3>
              <p>+91 997 170 1053</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex gap-2 "
          >
            <span className="h-fit p-2 rounded-lg bg-green-300 text-green-500 text-xl">
              <i className="fi fi-rr-marker" />
            </span>
            <div>
              <h3 className="font-semibold w-fit">Address</h3>
              <p className="max-w-[70%] hyphens-auto text-wrap">
                A-99, Sector 65, Noida UP-201301, India
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Page;
