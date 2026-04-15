"use client";

import { useEffect, useState } from "react";
import Loading from "../components/layout/loading";
import Hero from "../pages/heroSection";
import About from "@/pages/about";
import Education from "@/pages/education";
import Skill from "@/pages/skill";
import Experience from "@/pages/experience";
import Project from "@/pages/project";
import Services from "@/pages/service";
import Contact from "@/pages/contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <About />
          <Education />
          <Skill />
          <Experience />
          <Project />
          <Services />
          <Contact />
        </>
      )}
    </>
  );
}
