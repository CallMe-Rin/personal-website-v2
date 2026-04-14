"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const menu = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Project", href: "#project" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll saat menu mobile buka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-slate-900/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-bold text-white">
          <span className="text-purple-600">R</span>inaldo
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-white/80 transition hover:text-purple-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Desktop Button (shadcn) */}
        <Button
          asChild
          className="bg-purple-700 w-[100] hidden rounded-full md:flex"
        >
          <a href="#contact">Contact</a>
        </Button>

        {/* ✅ Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </Button>
      </nav>

      {/* ✅ Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-4 bg-slate-900 px-6 py-6">
          {menu.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-white/80 transition hover:text-purple-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
