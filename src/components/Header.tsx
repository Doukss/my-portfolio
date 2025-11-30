"use client";
import Link from "next/link";
import { useState } from "react";
import { Section } from "./Section";
import { Menu, X } from "lucide-react"; // icônes modernes

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blu">
      <Section className="flex items-center justify-between py-4">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-gray-200">CodeNivo</h1>

        {/* ------- NAV DESKTOP ------- */}
        <nav className="hidden md:flex items-center gap-6 text-gray-200 font-semibold">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Accueil
          </Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            À propos
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-400 transition-colors"
          >
            Projets
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* ------- BURGER MOBILE ------- */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen(true)}
        >
          <Menu size={32} />
        </button>
      </Section>

      {/* ------- MENU MOBILE SLIDE ------- */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/90 backdrop-blur-xl shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-gray-200"
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Menu links */}
        <nav className="flex flex-col items-start gap-6 mt-24 px-8 text-gray-200 text-lg font-semibold">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Accueil
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            À propos
          </Link>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Projets
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
