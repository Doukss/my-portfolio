import { Header } from "@/components/Header";
import Link from "next/link";
import TiltedCard from "@/components/TiltedCard";
import Aurora from "@/components/Aurora";
import AboutPage from "./about/page";
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-gray-500">CodeNivo</h1>

        <nav className="hidden md:flex items-center gap-6 text-gray-500 font-bold">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Accueil
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            À propos
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-600 transition-colors"
          >
            Projets
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Menu mobile plus tard */}
      </div>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#125B65"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="flex justify-around items-center gap-20 ">
        <div className="w-96 text-white">
          <p className="">Bonjour,je suis Malick Mbodj</p>
          <h1 className="text-4xl font-bold py-2">
            Développeur Web + <br />
            UI / UX Designer
          </h1>
          <p className=" text-xl py-4">
            Je transforme des idées en expériences <br />
            digitales intuitives et engageantes. <br />
            Allier code et design pour créer des solutions élégantes et
            performantes.
          </p>
          <div className="flex gap-4 mt-4 items-baseline justify-between">
            <Link
              href=""
              className="w-38 border border-gray-600 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-600 hover:text-white transition-colors cursor-pointer"
            >
              Télécharger CV
            </Link>
            <div>
              <Link
                href=""
                className=" w-4  border border-gray-600 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-600 hover:text-white transition-colors cursor-pointer"
              >
                V
              </Link>
            </div>
            <div>
              <Link
                href=""
                className="w-4 border border-gray-600 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-600 hover:text-white transition-colors cursor-pointer"
              >
                V
              </Link>
            </div>
            <div>
              <Link
                href=""
                className="w-4  border border-gray-600 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-600 hover:text-white transition-colors cursor-pointer"
              >
                V
              </Link>
            </div>
          </div>
        </div>
        <TiltedCard
          imageSrc="/milk.jpg"
          altText="Malick Mbodj"
          captionText="Malick Mbodj - Portfolio"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          
        />
      </div>

      <div className="h-screen">
        <AboutPage/>
      </div>
    </main>
  );
}
