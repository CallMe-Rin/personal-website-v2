"use client";

import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RinaldoImg from "@/assets/Rinaldo.jpg";
import { downloadCV } from "@/utils/downloadCV";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#081c2f] via-[#0b2a46] to-[#081c2f] text-white overflow-hidden"
    >
      {/* Navbar */}
      <Navbar />

      {/* Decorative Lines */}
      <div className="absolute right-24 top-32 hidden md:block">
        <div className="space-y-2">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-[2px] w-32 bg-sky-400/30" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex min-h-screen flex-col-reverse items-center justify-center gap-10 px-6 md:flex-row">
        {/* LEFT */}
        <div className="max-w-3xl text-center md:text-left">
          <p className="mb-2 text-lg tracking-widest text-purple-500">
            Rinaldo Dwi Faturahman
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            HAY! I&apos;M{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              RINALDO
            </span>
            <br />
            I&apos;M A <span className="text-purple-500">WEB DEVELOPER</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Mostly Frontend sometimes Fullstack. I build modern web apps with
            great user experience using React, Next.js, and Tailwind CSS.
          </p>

          {/* Social */}
          <div className="mt-6 flex justify-center gap-4 md:justify-start">
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://github.com/CallMe-Rin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-5 w-5 text-purple-500" />
              </a>
            </Button>

            <Button asChild variant="ghost" size="icon">
              <a
                href="https://www.linkedin.com/in/rinaldodwifaturahman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-5 w-5 text-purple-500" />
              </a>
            </Button>

            <Button asChild variant="ghost" size="icon">
              <a
                href="https://www.instagram.com/rinaldo.faturahman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-5 w-5 text-purple-500" />
              </a>
            </Button>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {/* ✅ Download CV */}
            <Button
              onClick={downloadCV}
              asChild
              size="lg"
              className="px-8 w-[300] h-[50] bg-purple-700 cursor-pointer"
            >
              <a className="text-xl">Download CV</a>
            </Button>

            {/* Contact */}
            <Button
              asChild
              size="lg"
              className="px-8 px-8 w-[300] h-[50] bg-purple-700"
            >
              <a href="#contact" className="text-xl">
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl"></div>

          <Image
            src={RinaldoImg}
            alt="Rinaldo"
            width={360}
            height={480}
            className="relative z-10 rounded-xl object-cover shadow-2xl transition duration-300 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}
