"use client";
import { Header } from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white">
      {/* <Header /> */}

      <section className="w-[80%] mx-auto mt-14 border-4 border-[#125B65] rounded-3xl p-6 flex flex-col lg:flex-row justify-around  items-center   lg:gap-6 h-auto lg:h-[550px]">
        {/* Bloc texte */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl">Sur Moi</h1>
          <p className="text-lg sm:text-xl mt-4 leading-relaxed">
            Je suis un développeur web passionné par la création de solutions
            numériques innovantes. Avec une expertise en JavaScript, React et
            Node.js, je conçois des applications performantes et dynamiques. Mon
            objectif est de transformer des idées en expériences utilisateur
            intuitives et engageantes.
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
    </main>
  );
}
