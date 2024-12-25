import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const LearnMoreButton = ({ to }) => (
  <Link
    to={to}
    className="mt-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-custom-blue rounded-full shadow-md group"
  >
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-blue group-hover:translate-x-0 ease">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full text-custom-blue transition-all duration-300 transform group-hover:translate-x-full ease">
      Zarezerwuj Teraz
    </span>
    <span className="relative invisible">Zarezerwuj Teraz</span>
  </Link>
);

const PackageSection = ({
  imagePath,
  alt,
  title,
  description,
  coupeSedanPrice,
  oversizePrice,
  to,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-xl">
    <img
      src={imagePath}
      alt={alt}
      className="w-full h-52 object-cover mb-4 rounded-xl"
    />
    <h2 className="flex items-center text-2xl font-semibold mb-4">
      {title === "Pakiet Podstawowy" && (
        <img
          src="/icons/car.svg"
          alt="Ikona Samochodu"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title === "Pakiet Premium" && (
        <img
          src="/icons/car.svg"
          alt="Ikona Premium"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title}
    </h2>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="mb-4">
      <ul className="list-disc list-inside text-custom-blue">
        <li className="text-lg font-semibold mb-2">
          Coupé i Sedan: {coupeSedanPrice}
        </li>
        <li className="text-lg font-semibold mb-2">
          SUV i Duże pojazdy: {oversizePrice}
        </li>
      </ul>
    </div>
    <LearnMoreButton to={to} />
  </div>
);

const DownArrow = () => (
  <div className="text-center text-custom-blue  mb-4">
    <svg
      className="w-8 h-8 mx-auto animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </div>
);

const PaintCorrection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const contactPath = "/contact";

  return (
    <div className="bg-gradient-to-b from-white to-custom-blue  p-6 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-8 p-4">
          <h1 className="text-6xl mb-6">
            <span className="text-black font-bold">Korekta </span>
            <span className="text-custom-blue font-bold">Lakieru</span>
          </h1>
          <p className=" leading-7">
            Witaj w DetailPro – miejscu, gdzie precyzja spotyka się z
            doskonałością. Nasze usługi korekty lakieru przywracają Twojemu
            samochodowi pierwotny blask. Nasi specjaliści usuwają rysy i zmatowienia,
            aby uzyskać efekt jak z salonu. Zaufaj DetailPro i odśwież wygląd
            swojego pojazdu, nadając mu niepowtarzalny połysk i ochronę.
          </p>
        </div>

        <h2 className="text-3xl text-custom-blue  text-center font-bold mb-4">
          Nasze Pakiety
        </h2>
        <DownArrow />

        <div className="grid grid-cols-1 gap-8">
          <PackageSection
            imagePath="/images/Paint Correction Stage 1.jpg"
            alt="Pakiet Podstawowy"
            title="Pakiet Podstawowy"
            description="Pakiet podstawowy obejmuje jednoetapową korektę lakieru, która usuwa drobne rysy i zmatowienia. Cały proces kończy się aplikacją wysokiej jakości sealanta, który chroni lakier i nadaje mu trwały połysk."
            coupeSedanPrice="1600 zł"
            oversizePrice="Dodatkowy koszt od 600 zł."
            to={contactPath}
          />

          <PackageSection
            imagePath="/images/Paint Correction Stage 2.jpeg"
            alt="Pakiet Premium"
            title="Pakiet Premium"
            description="Pakiet premium to trzyetapowa korekta lakieru. Proces obejmuje agresywną korektę głębokich rys, polerowanie i finalną aplikację sealanta. Efekt? Perfekcyjny blask i trwała ochrona."
            coupeSedanPrice="2800 zł"
            oversizePrice="Dodatkowy koszt od 600 zł."
            to={contactPath}
          />
        </div>
      </div>
    </div>
  );
};

export default PaintCorrection;
