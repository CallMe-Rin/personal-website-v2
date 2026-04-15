"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import Boostrap from "@/assets/bootstrap.png";
import CSS from "@/assets/css-3.png";
import Docker from "@/assets/docker.png";
import ExpressJS from "@/assets/express-js.png";
import Git from "@/assets/git.png";
import HTML from "@/assets/html-5.png";
import JS from "@/assets/js.png";
import Typescript from "@/assets/typeScript.png";
import Nextjs from "@/assets/nextjs.png";
import Nodejs from "@/assets/nodejs.png";
import Postgre from "@/assets/postgreSQL.png";
import Postman from "@/assets/postman.png";
import Tailwind from "@/assets/tailwindCSS.png";

const skills = [
  { name: "ExpressJS", image: ExpressJS },
  { name: "Docker", image: Docker },
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "Bootstrap", image: Boostrap },
  { name: "Tailwind", image: Tailwind },
  { name: "Javascript", image: JS },
  { name: "Typescript", image: Typescript },
  { name: "Next JS", image: Nextjs },
  { name: "Node JS", image: Nodejs },
  { name: "PostgreSQL", image: Postgre },
  { name: "Postman", image: Postman },
  { name: "Git", image: Git },
];

export default function Skill() {
  return (
    <section className="relative min-h-screen bg-[#081c2f] text-white overflow-hidden px-6 md:px-16 py-20">
      <h1 className="font-['Archivo_Black'] text-center font-bold text-3xl sm:text-4xl md:text-[75px] text-purple-600 pb-10 ml-[80]">
        Skills
      </h1>

      <div className="relative overflow-hidden group">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0000] to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0000] to-transparent z-10" />

        <div className="flex w-max animate-scroll gap-8 px-10 group-hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, index) => (
            <Card
              key={index}
              className="min-w-[180px] h-[200px] flex items-center justify-center 
              bg-purple-900 border-none rounded-2xl 
              shadow-[0_0_25px_rgba(168,85,247,0.25)] 
              hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]
              transition duration-300"
            >
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />

                <p className="text-gray-300 text-lg">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
