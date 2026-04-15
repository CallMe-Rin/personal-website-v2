"use client";

import { useEffect, useState } from "react";
import { PiSuitcase } from "react-icons/pi";
import Image from "next/image";
import Images from "@/assets/eduPurple.b06b4e8e.svg";
import { getExperiece } from "@/lib/api";
import type { Experience as ExperienceType } from "../types/experience";

export default function Experience() {
  const [data, setData] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await getExperiece();
        setData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#081c2f] text-white overflow-hidden px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* LEFT CONTENT */}
        <div className=" justify-center md:justify-end">
          <Image
            src={Images}
            alt="About Illustration"
            width={550}
            height={550}
            className="drop-shadow-2xl ml-[80] hidden md:block"
            priority
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="text-center md:text-left">
          <h1 className="font-['Archivo_Black'] font-bold text-3xl text-right sm:text-4xl md:text-[75px] text-purple-600 pb-10 mr-[90]">
            Experience
          </h1>

          {loading ? (
            <p className="text-slate-300">Loading...</p>
          ) : (
            <div className="space-y-6 max-w-xl mx-auto md:mx-0">
              {data.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-purple-900/60 rounded-2xl p-5 flex items-start gap-4 shadow-lg hover:scale-[1.02] transition ml-[80]"
                >
                  {/* Icon */}
                  <div className="bg-purple-600 p-3 rounded-full">
                    <PiSuitcase size={20} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-sm text-purple-300">
                      {edu.startYear} - {edu.endYear}
                    </p>
                    <h2 className="text-lg font-semibold">{edu.company}</h2>
                    <p className="text-gray-300 text-sm">{edu.jobTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
