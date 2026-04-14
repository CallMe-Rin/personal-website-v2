"use client";

import Image from "next/image";
import Images from "@/assets/purpleTheme-boy.d30fe9510fa0f092697b86eed0a1ba0e.svg";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#081c2f] text-white overflow-hidden px-6 md:px-16 py-20"
    >
      {/* Decorative Line */}
      <div className="flex items-center justify-center mb-16">
        <div className="w-2 h-2 bg-purple-600 rounded-full mx-2"></div>
        <div className="w-2 h-2 bg-purple-600 rounded-full mx-2"></div>
        <div className="w-1/2 md:w-1/3 h-2 bg-purple-600 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-600 rounded-full mx-2"></div>
        <div className="w-2 h-2 bg-purple-600 rounded-full mx-2"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="font-['Archivo_Black'] font-bold text-3xl sm:text-4xl md:text-5xl text-purple-600 pb-6 ml-[80]">
            Who Am I?
          </h1>

          <p className="text-justify sm:text-lg leading-relaxed text-slate-300 ml-[80]">
            I graduated with a Bachelor&apos;s degree in Informatics Engineering
            from Semarang University with a GPA of 3.86. I specialize in
            developing end-to-end solutions with a strong emphasis on
            performance, user-friendliness, security, and scalability. I possess
            excellent communication skills and thrive both in team-based
            environments and when working independently. I am highly motivated
            to continuously learn and grow in the field of software development
            while staying adaptive to the rapid advancement of information
            technology.
          </p>
        </div>

        {/* Image */}
        <div className="ml-[150] justify-center md:justify-end">
          <Image
            src={Images}
            alt="About Illustration"
            width={400}
            height={400}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
