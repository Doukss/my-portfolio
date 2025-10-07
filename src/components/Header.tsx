import Link from "next/link";
import { Section } from "./Section";

export function Header() {
  return (
    <header>
      <Section className="flex items-center justify-between py-4">
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
      </Section>
    </header>
  );
}
