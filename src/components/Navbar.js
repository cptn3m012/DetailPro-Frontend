import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://localhost:7045/api/service/navbar");
        const data = await response.json();
        setServices(data); // Ustawienie pobranych usług w stanie
      } catch (error) {
        console.error("Błąd podczas pobierania usług:", error);
      }
    };

    fetchServices();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <RouterLink to="/" className="flex items-center">
            <img src="./images/logo.png" alt="Logo" className="h-14 w-auto" />
          </RouterLink>
        </div>

        <div className="hidden md:flex space-x-10">
          <RouterLink
            to="/"
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Strona Główna
          </RouterLink>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            O nas
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Usługi
          </Link>

          {/* Dropdown menu dla pakietów */}
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4 flex items-center"
            >
              Pakiety
              <svg
                className="w-4 h-4 ml-1 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-12 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="p-2 text-sm">
                  {services.length > 0 ? (
                    services.map((service) => (
                      <li key={service.path}>
                        <RouterLink
                          to={service.path}
                          className="block px-4 py-2 hover:bg-custom-blue rounded-lg text-gray-700 hover:text-white"
                        >
                          {service.title}
                        </RouterLink>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">Brak usług</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Galeria
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black font-bold transition duration-300 hover:bg-custom-blue hover:text-white rounded-lg py-2 px-4"
          >
            Kontakt
          </Link>
        </div>

        {/* Przycisk menu mobilnego */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
