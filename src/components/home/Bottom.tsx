import Link from "next/link";
import React from "react";

const Bottom = () => {
  return (
    <section className="bg-gradient-to-tr from-purple-600/70 to-violet-300/40">
      <div className="h-[4rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 120"
          preserveAspectRatio="none"
        >
          <g className="n2-ss-divider-end">
            <path
              fill="RGBA(255,255,255,1)"
              opacity="0.25"
              d="M1920,0,0,120,0,0z"
            ></path>
            <path
              fill="RGBA(255,255,255,1)"
              opacity="0.5"
              d="M1920,0,0,80,0,0z"
            ></path>
            <path
              fill="RGBA(255,255,255,1)"
              d="M1920,-2,1920,0,0,40,0,-2z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="container py-20 text-center flex flex-col gap-8 items-center">
        <h2 className="font-medium tracking-tight text-2xl">
          In partnership with
        </h2>
        <div className="h-[64px] w-[64px]">
          <img
            src="https://unfluke.in/static/media/TradingView.1e73cada.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p>
          TradingView is a widely recognized and highly regarded platform among
          traders and investors, with a vast user base spanning the globe. It
          offers state-of-the-art charting tools that allow market enthusiasts
          to engage, analyze data, and prepare for <Link href="">btc usd</Link>,
          <Link href="">eth usd</Link> trading and various other assets.
        </p>
      </div>
    </section>
  );
};

export default Bottom;
