import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PackageSection from "./PackageSection";
import DownArrow from "./DownArrow";

const ServicePage = () => {
  const { path } = useParams();
  const [service, setService] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://localhost:7045/api/service/by-path/${path}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          throw new Error("Brak usługi lub ID.");
        }
        setService(data);
        return fetch(`https://localhost:7045/api/packages/service/${data.id}`);
      })
      .then((res) => res.json())
      .then((packagesData) => {
        setPackages(packagesData);
      })
      .catch((err) => {
        console.error("Błąd ładowania danych:", err);
      })
      .finally(() => setLoading(false));
  }, [path]);

  if (loading) {
    return <p className="text-center text-xl mt-10">Ładowanie...</p>;
  }

  if (!service) {
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        Nie znaleziono usługi pod tym adresem.
      </p>
    );
  }

  const contactPath = "/contact";
  const [firstPart, secondPart] = service.title.split(" ", 2);

  return (
    <div className="bg-gradient-to-b from-white to-custom-blue p-6 min-h-screen">
      <div className="container mx-auto">
        {/* Nagłówek */}
        <div className="p-4">
          <h1 className="text-6xl text-center mb-8">
            <span className="text-black font-bold">{firstPart} </span>
            <span className="text-custom-blue font-bold">{secondPart}</span>
          </h1>
          <p className="leading-6 mb-8 text-lg text-gray-700">
            {service.description}
          </p>
        </div>

        {/* Szczegółowy opis sekcji */}
        {service.detailedDescription && service.detailedDescription.length > 0 && (
          <div className="mb-12 p-4">
            {service.detailedDescription.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-custom-blue text-2xl mb-2 font-semibold">
                  {section.heading}
                </h2>
                <p className="leading-6 mb-8 text-lg text-gray-700">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Sekcja Pakietów */}
        <h2 className="text-3xl text-custom-blue text-center font-bold mb-4">
          Nasze Pakiety
        </h2>
        <DownArrow />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pack) => (
            <PackageSection key={pack.id} {...pack} to={contactPath} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
