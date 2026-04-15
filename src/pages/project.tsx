"use client";

import { useEffect, useState } from "react";
import { getProject } from "@/lib/api";
import Image from "next/image";
import type { Project as ProjectType } from "@/types/project";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Project() {
  const [data, setData] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // 🔥 tambahan

  useEffect(() => {
    setMounted(true); // 🔥 client only

    const fetchProject = async () => {
      try {
        const res = await getProject();
        setData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  // 🔥 cegah hydration mismatch
  if (!mounted) return null;

  return (
    <section
      id="project"
      className="relative min-h-screen bg-[#081c2f] text-white px-6 md:px-16 py-20"
    >
      <h1 className="font-['Archivo_Black'] text-center font-bold text-3xl sm:text-4xl md:text-[75px] text-purple-600 pb-12">
        Project
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : !Array.isArray(data) ? (
        <p className="text-red-400 text-center">Gagal mengambil data</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <Card
              className="boverflow-hidden p-0 border-none bg-purple-900/60"
              key={item.id}
            >
              <div className="relative w-full h-52 overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-purple-400">{item.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {item.description}
                  <div className="px-0 py-6 flex gap-3">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-black/40 hover:bg-black/60 px-5 py-3 rounded-md transition"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
