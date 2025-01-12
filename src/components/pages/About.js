import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";  

const About = () => {
  const [aboutData, setAboutData] = useState({
    title: "",
    content: "",
    buttonText: "",
  });

  useEffect(() => {
    fetch("https://localhost:7045/api/about")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Błąd sieci: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Pobrane dane:", data);
        setAboutData(data);
      })
      .catch((err) => {
        console.error("Błąd ładowania danych:", err);
      });
  }, []);

  return (
    <section
      id="about"
      className="flex items-center bg-gradient-to-b from-white to-custom-blue xl:h-screen"
    >
      <div className="justify-center flex-1 m-6 py-4 lg:py-10 lg:m-40">
        <div
          className="relative py-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("images/why-us.png")',
            borderRadius: "1.5rem",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 rounded-3xl"></div>
          <div className="relative z-10 justify-center px-2 py-2 mx-auto max-w-7xl lg:py-28 md:px-7">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-5 lg:px-30 mb-2 lg:mb-4">
                <h2 className="mb-6 text-4xl font-bold text-gray-100 md:text-5xl dark:text-gray-300">
                  {aboutData.title}
                </h2>
                <p className="mb-8 leading-7 text-sm lg:text-lg lg:leading-loose text-gray-400">
                  {aboutData.content}
                </p>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="inline-flex px-6 py-2 font-semibold leading-loose text-gray-100 transition-all duration-300 bg-custom-blue rounded-full hover:bg-sky-600"
                >
                  {aboutData.buttonText}
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
