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
    <main className="transition-all">
      <Layout>
        <Hero />
        <Features />
        <Bottom />
      </Layout>
    </main>
  );
};

export default Page;
