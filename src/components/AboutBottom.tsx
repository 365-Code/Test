import Link from "next/link";
import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const AboutBottom = () => {
  return (
    <section className="bg-gradient-to-tr from-slate-600/70 to-slate-50-300/40">
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
        <div className="flex flex-col items-center">
          <p className="tag-cyan tag">Stats</p>
          <h2 className="font-medium tracking-tight text-4xl capitalize">
            Unfluke In Numbers
          </h2>
        </div>

        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4 items-center border p-6 shadow-inner rounded-xl">
            <div className="text-6xl font-medium">
              <AnimatedCounter from={1} to={100} />+
            </div>
            <div>
              <p className="font-medium">Indicators</p>
              <p>To help you get best scanners</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center border p-6 shadow-inner rounded-xl">
            <div className="text-6xl font-medium">
              <AnimatedCounter from={1} to={1} />TB+
            </div>
            <div>
              <p className="font-medium">Market Data</p>
              <p>To computer scan results and alerts</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center border p-6 shadow-inner rounded-xl">
            <div className="text-6xl font-medium">
              <AnimatedCounter from={1} to={6} />
            </div>
            <div>
              <p className="font-medium">Years of Market Data</p>
              <p>In equity, Futures and Options</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center border p-6 shadow-inner rounded-xl">
            <div className="text-6xl font-medium">
              <AnimatedCounter from={1} to={1000} />+
            </div>
            <div>
              <p className="font-medium">Potential option strategies</p>
              <p>By using indicators and your ideas!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBottom;
