import React from "react";
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
      Umów teraz
    </span>
    <span className="relative invisible">Umów teraz</span>
  </Link>
);

const PackageSection = ({
  imagePath,
  alt,
  title,
  subtitle,
  description,
  coupeSedanPrice,
  oversizePrice,
  to,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-xl">
    <img
      src={imagePath}
      alt={alt}
      className="w-full h-60 object-cover mb-4 rounded-xl"
    />
    <h2 className="flex items-center text-2xl font-semibold mb-2">
      {(title === "Entry Level Package" || title === "Standard Package" || title === "Premium Package" || title === "Elite Package") && (
        <img
          src="/icons/car.svg"
          alt="Car Icon"
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
      <ul className="list-disc list-inside">
        <li className="font-semibold mb-2">
          Coupé/Sedan: {coupeSedanPrice}
        </li>
        <li className="font-semibold mb-2">
          SUV/Duże pojazdy: {oversizePrice}
        </li>
      </ul>
    </div>
    <LearnMoreButton to={to} />
  </div>
);

export default PackageSection;
