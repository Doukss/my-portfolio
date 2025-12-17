"use client";

import ProfileCard from "@/components/ProfileCard";
import { ChromaGrid } from "@/components/ChromaGrid";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white">
      {/* SECTION ABOUT */}
      <section
        className="w-[99%] mx-auto border-4 border-[#125B65] rounded-3xl p-6 flex flex-col lg:flex-row justify-around items-center gap-6"
        id="about"
      >
        {/* TEXTE */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl">Sur moi</h1>

          <p className="sm:text-xl mt-4 leading-relaxed">
            Je suis un développeur Full Stack passionné par la création de
            solutions numériques modernes et performantes. Grâce à une maîtrise
            des technologies front-end (JavaScript{" "}
            <IoLogoJavascript className="inline text-yellow-400" />, React{" "}
            <FaReact className="inline text-cyan-400" />, Tailwind{" "}
            <RiTailwindCssFill className="inline text-cyan-400" />) et back-end
            (Node.js <FaNodeJs className="inline text-green-500" />, Express,
            bases de données SQL/NoSQL{" "}
            <SiPostgresql className="inline text-blue-400" />), je conçois des
            applications complètes, robustes et évolutives. J&#39;aime relever
            des défis techniques, optimiser les performances et livrer des
            solutions efficaces qui apportent une vraie valeur.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="w-full sm:w-[70%] lg:w-[35%]">
          <ProfileCard
            name="Malick Mbodj"
            title="Web Developer & UI/UX Designer"
            handle="codeNivo"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/milk.jpg"
            miniAvatarUrl="/milk.jpg"
            innerGradient={["#0087CE", "#00C6FF"]}
            behindGlowColor="#00f0ff"
            behindGlowSize={140}
            showUserInfo
            enableTilt
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="mt-20 px-4">
        <h2 className="text-4xl font-bold">Outils et technologies</h2>
        <p className="mb-8">Mes compétences professionnelles</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { img: "vsc.png", title: "VS Code", desc: "Éditeur" },
            { img: "rea.png", title: "React", desc: "Framework" },
            { img: "ne.png", title: "Next.js", desc: "Framework" },
            { img: "tail.png", title: "Tailwind", desc: "Framework" },
            { img: "js.png", title: "JavaScript", desc: "Langage" },
            { img: "nod.png", title: "Node.js", desc: "Runtime" },
            { img: "git.png", title: "GitHub", desc: "Versioning" },
            { img: "fg.png", title: "Figma", desc: "Design" },
            { img: "ph.png", title: "PHP", desc: "Langage" },
          ].map((tool) => (
            <div
              key={tool.title}
              className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-3 items-center hover:bg-gray-50/5 transition"
            >
              <div className="bg-gray-100/5 w-[64px] h-[64px] rounded-xl flex items-center justify-center">
                <Image
                  src={`/${tool.img}`}
                  alt={tool.title}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="font-bold">{tool.title}</h3>
                <p className="text-sm text-gray-400">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-20 px-4" id="skills">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Projets</h2>
          <p>
            Présentation d&#39;une sélection de projets reflétant mes compétences
            et ma créativité.
          </p>
        </div>

        <ChromaGrid items={[]} />
      </section>

      {/* CONTACT */}
      <section className="mt-20 px-6 bg-gray-200/5 rounded-2xl" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <input
              name="name"
              placeholder="Votre nom"
              className="rounded-xl px-4 py-3 bg-black/20 border border-gray-200/20"
            />
            <input
              name="email"
              type="email"
              placeholder="Votre email"
              className="rounded-xl px-4 py-3 bg-black/20 border border-gray-200/20"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Votre message"
              className="md:col-span-2 rounded-xl px-4 py-3 bg-black/20 border border-gray-200/20"
            />
            <button className="md:col-span-2 bg-black py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 py-12 border-t border-gray-700 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} CodeNivo — Tous droits réservés.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <Link href="https://github.com/Doukss" target="_blank">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            LinkedIn
          </Link>
        </div>
      </footer>
    </main>
  );
}
