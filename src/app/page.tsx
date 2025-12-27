"use client";

import Link from "next/link";
import TiltedCard from "@/components/TiltedCard";
import Aurora from "@/components/Aurora";
import AboutPage from "./about/page";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#125B65"]}
        blend={0.5}
        amplitude={1.5}
        speed={0.5}
      />

      {/* ------- HERO SECTION -------- */}
      <div
        className="
          flex flex-col-reverse md:flex-row
          justify-between items-center
          gap-10 md:gap-20 
          px-6 md:px-20
        "
      >
        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-lg md:text-xl">Bonjour, je suis Malick Mbodj</p>

          <span className="text-3xl md:text-5xl font-bold leading-snug">
            Développeur Web + <br />
            UI / UX Designer
          </span>

          <div className="text-base md:text-xl py-4 leading-relaxed">
            <TextType
  text={[
    "Je transforme des idées en expériences digitales intuitives et engageantes. Allier code et design pour créer des solutions élégantes et performantes.",
  ]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  variableSpeed={false}
  onSentenceComplete={() => {}}
/>

          </div>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link
              href="#"
              className="
                border border-gray-600 px-4 py-2 rounded-full 
                text-gray-300 hover:bg-gray-600 hover:text-white
                transition-colors
                font-semibold
                flex items-center justify-center
              "
            >
              Télécharger CV
            </Link>

            <Link
              href="#skills"
              className="
                border border-gray-600 px-4 py-2 rounded-full 
                text-gray-300 hover:bg-gray-600 hover:text-white
                transition-colors
                font-semibold
                h-16
                flex items-center justify-center
              "
            >
              Explorez mes projets
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <TiltedCard
            imageSrc="/milk.jpg"
            altText="Malick Mbodj"
            captionText="Malick Mbodj - Portfolio"
            containerHeight="280px"
            containerWidth="390px"
            imageHeight="380px"
            imageWidth="380px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="mt-24 md:mt-40 px-4 md:px-20">
        <AboutPage />
      </div>
    </main>
  );
}
