"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import AboutBottom from "../AboutBottom";
import Layout from "../layout/Layout";
import Footer from "../layout/Footer";

const About = () => {
  const [active, setActive] = useState("about");

  const aboutUs = {
    about: [
      "Welcome to Unfluke! We are passionate about empowering traders and investors like you with the tools and resources needed to test and refine your trading ideas and strategies. Our platform provides a comprehensive suite of features that enable you to make informed decisions based on historical data, receive timely alerts, leverage powerful scanners, and perform accurate backtesting.",
      "At Unfluke, we understand the challenges traders face in today's dynamic and ever-evolving markets. It can be daunting to navigate the complexities of the financial world, interpret market trends, and identify profitable opportunities. That's why we have built a user-friendly and intuitive platform that caters to traders of all experience levels, from beginners to seasoned professionals.",
      "Our primary goal is to make testing accessible and efficient for everyone. We believe that by providing robust tools and valuable insights, we can help you gain a competitive edge in the market. Whether you are a day trader, swing trader, or long-term investor, our platform equips you with the necessary resources to make smarter decisions and maximize your potential for success.",
    ],
    key: {
      title: "Key Features of Unfluke:",
      list: [
        {
          title: "Historical Data Analysis",
          desc: "Leverage our vast historical database to analyze past market trends, price movements, and trading patterns. Uncover valuable insights that can guide your future trading decisions.",
        },
        {
          title: "Strategy Testing and Optimization",
          desc: "Test out your trading ideas and strategies using our advanced backtesting capabilities. Identify strengths and weaknesses, refine your approach, and improve your overall trading performance.",
        },
        {
          title: "Real-time Alerts",
          desc: "Stay informed with timely alerts that notify you about significant market events, price movements, and potential trading opportunities. Customize alerts based on your specific preferences and trading style.",
        },
        {
          title: "Powerful Scanners",
          desc: "Discover potential trades and investments efficiently with our comprehensive scanning tools. Filter stocks, currencies, or other financial instruments based on your desired criteria, such as price, volume, volatility, and technical indicators.",
        },
      ],
    },
    commit:
      "We are dedicated to providing you with a seamless and enriching trading experience. Our team of experts is committed to continuous improvement and innovation, ensuring that our platform remains at the forefront of trading technology. We value your feedback and are always open to suggestions on how we can enhance our services to better meet your needs. Join Unfluke today and unlock the full potential of your trading journey. Empower yourself with the tools, knowledge, and support you need to achieve your financial goals",
  };

  return (
    <div className="wrapper">
      <Layout>
        <div className="parallex">
          <div className="text-center bg-white">
            <h1 className="uppercase text-center text-5xl my-16">
              We are on a mission to{" "}
              <span className="dual-color-blue">revolutionize</span> trading
            </h1>
            <button className="btn-primary translate-y-4 text-2xl">
              Let&apos;s have a talk
            </button>
          </div>
          <div className="background overflow-hidden">
            <img
              src="https://unfluke.in/static/media/coworking2.4c4624c4.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <section className="bg-white py-16 h-full z-10">
          <div className="container">
            <div className="flex md:flex-row flex-col gap-4">
              <div className="text-center flex flex-col items-center gap-2 ">
                <img
                  src="https://unfluke.in/static/media/about_pic.a4eddf8b.jpg"
                  alt="founder"
                  className="rounded-xl h-[350px] w-[350px] "
                />
                <h3 className="text-center text-lg font-bold ">
                  Aseem Singhal, Founder
                </h3>
              </div>
              <div className="flex-1">
                <div className="transition-all translate-y-[0.8px] z-[1] bg-white border border-b-0 text-nowrap flex flex-row md:flex-none shadow-inner shadow-black/5 md:w-fit">
                  <button
                    onClick={() => setActive("about")}
                    className={`p-4 ${
                      active == "about" ? "bg-pink-400 font-semibold" : ""
                    } transition-all flex-1`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setActive("key")}
                    className={`p-4 ${
                      active == "key" ? "bg-pink-400 font-semibold" : ""
                    } transition-all flex-1`}
                  >
                    Key Features
                  </button>
                  <button
                    onClick={() => setActive("commit")}
                    className={`p-4 ${
                      active == "commit" ? "bg-pink-400 font-semibold" : ""
                    } transition-all flex-1`}
                  >
                    Commitment
                  </button>
                </div>
                <div className="transition-all snap-start border rounded-b-xl p-4 shadow-black/5">
                  <AnimatePresence>
                    <motion.div initial className="space-y-2">
                      {active == "about" ? (
                        aboutUs.about.map((para, i) => (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={i}
                          >
                            {para}
                          </motion.p>
                        ))
                      ) : active == "key" ? (
                        <>
                          <p>{aboutUs.key.title}</p>
                          <motion.ol
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="list-decimal px-4"
                          >
                            {aboutUs.key.list.map((lst, i) => (
                              <li key={i}>
                                <span className="font-semibold">
                                  {lst.title}:
                                </span>
                                {lst.desc}
                              </li>
                            ))}
                          </motion.ol>
                        </>
                      ) : active == "commit" ? (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {aboutUs.commit}
                        </motion.p>
                      ) : (
                        ""
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutBottom />
      </Layout>
    </div>
  );
};

export default About;
