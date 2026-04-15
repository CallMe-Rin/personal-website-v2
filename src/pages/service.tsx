"use client";

import { FaFirefoxBrowser, FaCode, FaDatabase } from "react-icons/fa";

const services = [
  {
    name: "Front End Development",
    icon: FaCode,
    description: "Building a modern and responsive UI using React & Next.js",
  },
  {
    name: "Web Development",
    icon: FaFirefoxBrowser,
    description: "Building a fast, scalable, and SEO-friendly website",
  },
  {
    name: "Backend Development",
    icon: FaDatabase,
    description: "Building scalable APIs, databases, and server systems",
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-[#081c2f] text-white px-6 md:px-16 py-20"
    >
      <h1 className="font-['Archivo_Black'] text-center font-bold text-3xl sm:text-4xl md:text-[75px] text-purple-600 pb-10">
        Services
      </h1>

      <p className="text-center text-xl max-w-2xl mx-auto pb-20">
        Here are some of the services I offer. Please feel free to contact me if
        I can help you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="bg-purple-900/60 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <Icon className="text-4xl text-white mb-4" />

              <h2 className="text-xl font-bold mb-2">{service.name}</h2>

              <p className="text-gray-300">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
