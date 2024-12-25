// Import necessary dependencies from React and React Router
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Constant for the Schedule Now button
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
      Umów teraz
    </span>
    <span className="relative invisible">Umów teraz</span>
  </Link>
);

// Reusable Package Section component
const PackageSection = ({
  imagePath,
  alt,
  title,
  subtitle, // New prop for the subtitle
  description,
  coupeSedanPrice,
  oversizePrice,
  to, // Add to prop for the Schedule Now button
}) => (
  <div className="bg-white p-6 rounded-xl shadow-xl">
    <img
      src={imagePath}
      alt={alt}
      className="w-full h-52 object-cover mb-4 rounded-xl"
    />
    <h2 className="flex items-center text-2xl font-semibold mb-2">
      {title === "Entry Level Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title === "Standard Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title === "Premium Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Side Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title === "Elite Package" && (
        <img
          src="/icons/car.svg"
          alt="Car Side Icon"
          className="w-10 h-10 p-1 bg-custom-blue rounded-full mr-2"
        />
      )}
      {title}
    </h2>
    {subtitle && (
      <h3 className="text-custom-blue font-semibold text-lg mb-6">
        {subtitle}
      </h3>
    )}
    <p className="text-gray-700 text-md mb-6">{description}</p>
    <div className="mb-4">
      <ul className="list-disc list-inside ">
        <li className=" font-semibold mb-2">
          Coupes & Sedans: {coupeSedanPrice}
        </li>
        <li className=" font-semibold mb-2">SUV & Oversize: {oversizePrice}</li>
      </ul>
    </div>
    {/* Schedule Now Button */}
    <LearnMoreButton to={to} />
  </div>
);

// Arrow component
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

const Ceramic = () => {
  useEffect(() => {
    // Reset scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Define paths for the Schedule Now links

  const contactPath = "/contact"; // Add the path for the Contact page

  return (
    <div className="bg-gradient-to-b from-white to-custom-blue  p-6 min-h-screen">
      <div className="container mx-auto">
        <div className=" mb- p-4">
          <h1 className="text-6xl text-center mb-8">
            <span className="text-black font-bold">Powłoka </span>
            <span className="text-custom-blue font-bold">Ceramiczna</span>
          </h1>
          <p className=" leading-6 mb-8">
            Z biegiem czasu czynniki takie jak promieniowanie słoneczne, owady, paliwo, kurz i zanieczyszczenia stopniowo pogarszają stan lakieru Twojego samochodu. 
            Tego rodzaju zużycie może być niepokojące, ale istnieje skuteczne rozwiązanie ochrony i regeneracji. DetailPro oferuje zaawansowane usługi nakładania powłok ceramicznych, 
            które chronią i odnawiają lakier Twojego pojazdu. Dzięki naszym usługom Twój samochód zachowa swój blask, przypominając wygląd jak z salonu.
          </p>
          <h2 className=" text-custom-blue text-2xl mb-2 font-semibold">
            Czym jest powłoka ceramiczna?
          </h2>
          <p className=" leading-6 mb-8">
            Powłoka ceramiczna to zaawansowana, nanoskopowa warstwa ochronna nakładana na zewnętrzne elementy pojazdu. Przechodzi ona ze stanu płynnego w solidną formę, 
            tworząc trwałą barierę składającą się głównie z dwutlenku krzemu (SiO2). Po nałożeniu na lakier samochodu tworzy efekt hydrofobowy, skutecznie odpychając wodę i chroniąc przed różnymi zanieczyszczeniami.
          </p>
          <h2 className=" text-custom-blue text-2xl mb-2 font-semibold">
            Co robimy?
          </h2>
          <p className=" leading-6 mb-8">
            W DetailPro oferujemy kompleksowe pakiety, które obejmują dokładne mycie ręczne, glinkowanie, czyszczenie kół i opon oraz pielęgnację skór wewnątrz pojazdu. 
            Dodatkowo wykonujemy jednoetapową korektę lakieru w celu usunięcia drobnych rys i poprawy wyglądu lakieru. Nasze pakiety obejmują pełną powłokę ceramiczną na lakier, plastiki, elementy ozdobne, felgi oraz przednią szybę.
          </p>
        </div>

        <h2 className="text-3xl text-custom-blue text-center font-bold mb-4">
          Nasze Pakiety
        </h2>
        <DownArrow />

        <div className="grid grid-cols-1 gap-8 mb-10">
          <PackageSection
            imagePath="/images/ceramic-1.jpg"
            alt="Pakiet Podstawowy"
            title="Pakiet Podstawowy"
            subtitle="Q² ONE EVO by Gyeon | 24 miesiące trwałości"
            description="Powłoka Q² ONE EVO zapewnia wyjątkowy efekt lustrzanego połysku oraz trwałą ochronę. Zaprojektowana z myślą o długowieczności, powłoka oferuje trwałość powyżej 24 miesięcy. Produkt stanowi przykład profesjonalnej technologii ochrony powierzchni."
            coupeSedanPrice="4800 zł"
            oversizePrice="Dodatkowy koszt zaczynający się od 1200 zł."
            to={contactPath}
          />

          <PackageSection
            imagePath="/images/ceramic-2.jpg"
            alt="Pakiet Standardowy"
            title="Pakiet Standardowy"
            subtitle="Q² MOHS EVO by Gyeon | 36+ miesięcy trwałości"
            description="Powłoka Q² MOHS EVO, stworzona przez GYEON, to przełom w dziedzinie powłok ceramicznych. Dzięki zastosowaniu fluoru w polimerach powłoka oferuje wysoki połysk, trwałość i chemiczną odporność, zapewniając wyjątkową hydrofobowość."
            coupeSedanPrice="6000 zł"
            oversizePrice="Dodatkowy koszt zaczynający się od 1200 zł."
            to={contactPath}
          />

          <PackageSection
            imagePath="/images/ceramic-3.jpg"
            alt="Pakiet Premium"
            title="Pakiet Premium"
            subtitle="Q² SYNCRO EVO by Gyeon | 48+ miesięcy trwałości"
            description="Q² SYNCRO EVO to najnowsza generacja wielowarstwowej powłoki ceramicznej GYEON. W zestawie zastosowano nowoczesną bazową powłokę Q² MOHS EVO oraz innowacyjną warstwę Q² SKIN EVO. Zapewnia maksymalną trwałość i połysk, oferując doskonałe właściwości samoczyszczące oraz hydrofobowe."
            coupeSedanPrice="7200 zł"
            oversizePrice="Dodatkowy koszt zaczynający się od 1500 zł."
            to={contactPath}
          />

          <PackageSection
            imagePath="/images/ceramic-4.jpg"
            alt="Pakiet Elite"
            title="Pakiet Elite"
            subtitle="NANO GRAPHENE by ARTDESHINE | 7 lat trwałości"
            description="Grafen to materiał grubości jednego atomu, który jest najlżejszy, najcieńszy i najmocniejszy spośród znanych substancji. Jego wyjątkowe właściwości sprawiają, że jest idealny do zastosowania w powłokach samochodowych. Powłoka ta skutecznie redukuje ryzyko powstawania plam, zarysowań oraz korozji."
            coupeSedanPrice="8400 zł"
            oversizePrice="Dodatkowy koszt zaczynający się od 1500 zł."
            to={contactPath}
          />
        </div>
      </div>
    </div>
  );
};

export default Ceramic;
