import React, { useCallback } from "react";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Services from "./Services";

const Home = () => {
  // Function to scroll to the contact section
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex justify-center h-screen text-black ">
        {/* Background Image */}
        <div
          className="absolute inset-0 overflow-hidden flex items-center lg:translate-x-1/4"
          style={{
            backgroundImage: 'url("/images/nsx.png")',
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div>

        {/* Hero Content */}
        <div className="text-left z-10 text-black p-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-16 ">
            <span className="text-custom-blue">Profesjonalny Detailing</span> – Twój Samochód w Najlepszym Wydaniu
          </h1>
          <p className="text-lg lg:text-xl mb-4">
          Odmień swój samochód i nadaj mu wyjątkowy blask.
          </p>

          {/* Schedule Now Button */}
          <button
            onClick={scrollToContact}
            className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-xl rounded-full"
          >
            Umów Wizytę
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
