"use client";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/CallMe-Rin" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/rinaldodwifaturahman/",
  },
  { icon: FaInstagram, href: "https://www.instagram.com/rinaldo.faturahman/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#081c2f] text-white overflow-hidden px-6 md:px-16 py-20"
    >
      {/* TITLE */}
      <h1 className="text-5xl md:text-7xl font-bold text-purple-600 mb-12">
        Contacts
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT FORM */}
        <div className="space-y-6">
          {/* NAME */}
          <div>
            <label className="text-purple-500 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 p-4 bg-transparent border-2 border-purple-600 rounded-2xl outline-none focus:shadow-[0_0_15px_#a855f7]"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-purple-500 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mt-2 p-4 bg-transparent border-2 border-purple-600 rounded-2xl outline-none focus:shadow-[0_0_15px_#a855f7]"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-purple-500 font-semibold">Message</label>
            <textarea
              rows={6}
              placeholder="Type your message..."
              className="w-full mt-2 p-4 bg-transparent border-2 border-purple-600 rounded-2xl outline-none resize-none focus:shadow-[0_0_15px_#a855f7]"
            />
          </div>

          {/* BUTTON */}
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full font-semibold">
            Send <FaPaperPlane />
          </button>
        </div>

        {/* RIGHT INFO */}
        <div className="space-y-8">
          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-600 rounded-full">
              <FaEnvelope />
            </div>
            <p className="text-lg">rinaldodwifaturahman@gmail.com</p>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-600 rounded-full">
              <FaPhone />
            </div>
            <p className="text-lg">+6285183155695</p>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-600 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <p className="text-lg">Semarang, Jawa Tengah, Indonesia - 50268</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 pt-6">
            {socials.map((item, i) => (
              <SocialIcon key={i} href={item.href} icon={<item.icon />} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SOCIAL ICON COMPONENT */
function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-purple-600 rounded-full hover:scale-110 transition duration-200 cursor-pointer"
    >
      {icon}
    </a>
  );
}
