import Editor from "@/components/Editor";
import EditorPreview from "@/components/EditorPreview";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/features/Features";
import React from "react";
import Bottom from "@/components/home/Bottom";
import AnimatedCounter from "@/components/AnimatedCounter";
import Layout from "@/components/layout/Layout";

const Page = () => {
  return (
    // <main className="max-h-[73vh] no-scrollbar overflow-y-scroll snap-mandatory snap-y transition-all">
    <main className="transition-all">
      {/* <div className="h-[73vh] snap-start"> */}
      <Layout>

        <Hero />
      {/* </div> */}
      {/* <div className="h-[73vh]"> */}
        <Features />
        <Bottom />
      {/* </div> */}
      </Layout>
    </main>
  );
};

export default Page;
