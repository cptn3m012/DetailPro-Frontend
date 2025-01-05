import React from "react";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Services from "./Services";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <>
      <section className="relative flex justify-center h-screen text-black ">
        <div
          className="absolute inset-0 overflow-hidden flex items-center lg:translate-x-1/8"
          style={{
            backgroundImage: 'url("/images/main-car.png")',
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div>

        <div className="text-left z-10 text-black p-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-16 ">
            <span className="text-custom-blue">Profesjonalny Detailing</span> – Twój Samochód w Najlepszym Wydaniu
          </h1>
          <p className="text-lg lg:text-xl mb-4">
            Odmień swój samochód i nadaj mu wyjątkowy blask.
          </p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-xl rounded-full"
          >
            Umów Wizytę
          </ScrollLink>
        </div>
      </section>

      <About />
      <Services />
      <Gallery />

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
