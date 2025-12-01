"use client";
import { Header } from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import ChromaGrid from "@/components/ChromaGrid";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white">
      {/* <Header /> */}
      <section
        className="w-[99%] mx-auto  border-4 border-[#125B65] rounded-3xl p-6 flex flex-col lg:flex-row justify-around  items-center   lg:gap-6 h-auto lg:h-[550px]"
        id="about"
      >
        {/* Bloc texte */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl">Sur Moi</h1>
          <p className=" sm:text-xl mt-4 leading-relaxed">
            Je suis un développeur Full Stack passionné par la création de
            solutions numériques modernes et performantes. Grâce à une maîtrise
            des technologies front-end (JavaScript, React, Tailwind) et back-end
            (Node.js, Express, bases de données SQL/NoSQL), je conçois des
            applications complètes, robustes et évolutives. J’aime relever des
            défis techniques, optimiser les performances et livrer des solutions
            efficaces qui apportent une vraie valeur.
          </p>
        </div>

        {/* Bloc carte profil */}
        <div className=" w-full sm:w-[70%] lg:w-[35%] ">
          <ProfileCard
            name="Malick Mbodj"
            title="Web Developer & UI/UX Designer"
            handle="codeNivo"
            status="Online"
            contactText="Contact Me"
            avatarUrl="milk.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </section>

      {/* Autres sections à ajouter ici */}
      <section className="mt-20 px-4" id="">
        <p className="text-4xl font-bold">Outils et technologies</p>
        <br />
        <p className="mb-8">Mes compétences professionnelles</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl flex items-center justify-center">
              <img src="vsc.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Code Visual Studio</h1>
              <p>Éditeur de code</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
              <img src="rea.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">React JS</h1>
              <p>Cadre</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
              <img src="ne.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Next JS</h1>
              <p>Cadre</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
              <img src="tail.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Tailwind CSS</h1>
              <p>Cadre</p>
            </div>
          </div>

          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
              <img src="boo.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Bootstrap</h1>
              <p>Cadre</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
              <img src="js.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">JavaScript</h1>
              <p>Langue</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl flex items-center justify-center">
              <img src="nod.png" alt="" className="w-14 h-14" />
            </div>
            <div>
              <h1 className="font-bold">Node JS</h1>
              <p>Exécution Javascript</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl flex items-center justify-center">
              <img src="git.png" alt="" className="w-14 h-14" />
            </div>
            <div>
              <h1 className="font-bold">Github</h1>
              <p>Dépôt</p>
            </div>
          </div>

          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
              <img src="ai.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Adobe Illustrator</h1>
              <p>Application de concep...</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl flex items-center justify-center">
              <img src="va.png" alt="" className="w-15 h-15 " />
            </div>
            <div>
              <h1 className="font-bold">Canva</h1>
              <p>Application de concep...</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="fg.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Figma</h1>
              <p>Application de concep...</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="ja.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Java</h1>
              <p>Langue</p>
            </div>
          </div>

          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="css.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">CSS</h1>
              <p>Langue</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="ht.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">HTML</h1>
              <p>Langue</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="ff.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Firebase</h1>
              <p>Cadre</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="sq.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">MySQL</h1>
              <p>Cadre</p>
            </div>
          </div>

          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="vt.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">Vite</h1>
              <p>Cadre</p>
            </div>
          </div>
          <div className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-2 items-center hover:bg-gray-50/5 transition-colors">
            <div className="bg-gray-100/5 w-18 h-18 rounded-xl">
            <img src="ph.png" alt="" />
            </div>
            <div>
              <h1 className="font-bold">PHP</h1>
              <p>Langue</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 px-4" id="skills">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Projet</h1>
          <p>
            Présentation d'une sélection de projets qui reflètent mes
            compétences, ma créativité et ma passion pour la création
            d'expériences numériques significatives.
          </p>
        </div>
        <ChromaGrid />
      </section>

      <section className="mt-20 px-6  bg-gray-200/5 rounded-2xl" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-10">
            Une idée, un projet ou une collaboration ? Envoyez-moi un message.
          </p>

          <div className=" shadow-xl rounded-2xl p-8 border border-gray-200/30">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div className="flex flex-col">
                <label className="text-left text-sm font-medium mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  className="border border-gray-200/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-left text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-200/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Votre email"
                />
              </div>

              {/* Message (sur 2 colonnes) */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-left text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="border border-gray-200/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>

              {/* Bouton */}
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + description */}
          <div>
            <h1 className="text-2xl font-bold mb-3">CodeNivo</h1>
            <p className="text-gray-400 text-sm">
              Développeur Full Stack passionné, créant des solutions modernes et
              performantes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="font-semibold mb-3">Suivez-moi</h3>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Ligne du bas */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} CodeNivo — Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
