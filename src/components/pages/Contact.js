import {
  faBox,
  faCogs,
  faComment,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import AlertModal from "./AlertModal";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchServices();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    packageType: "",
    message: "",
  });

  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [reservationStatus, setReservationStatus] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Pobieranie usług z backendu
  const fetchServices = async () => {
    try {
      const response = await fetch("https://localhost:7045/api/service");
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Błąd podczas pobierania usług:", error);
    }
  };

  // Pobieranie pakietów dla wybranej usługi
  const fetchPackages = async (serviceId) => {
    try {
      const response = await fetch(
        `https://localhost:7045/api/packages/service/${serviceId}`
      );
      const data = await response.json();
      setPackages(data);
    } catch (error) {
      console.error("Błąd podczas pobierania pakietów:", error);
      setPackages([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "serviceType") {
      const selectedService = services.find(
        (service) => service.id === parseInt(value)
      );

      if (selectedService) {
        fetchPackages(selectedService.id);
      }

      setFormData({
        ...formData,
        [name]: value,
        packageType: "", // Resetowanie pakietu po zmianie usługi
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
  
    if (!isFormValid) {
      setModalMessage("Proszę wypełnić wszystkie pola.");
      setReservationStatus("error");
      setIsModalVisible(true);
      setTimeout(() => setIsModalVisible(false), 5000);
      return;
    }
  
    setLoading(true);
  
    try {
      // Znajdź nazwę usługi na podstawie ID
      const selectedService = services.find(
        (service) => service.id === parseInt(formData.serviceType)
      );
  
      const requestBody = {
        ...formData,
        serviceType: selectedService ? selectedService.title : formData.serviceType,
      };
  
      const response = await fetch("https://localhost:7045/api/service/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        const result = await response.json();
        setModalMessage(result.message || "Zarezerwowano usługę.");
        setReservationStatus("success");
      } else {
        const error = await response.json();
        setModalMessage(error.message || "Nie udało się zarezerwować usługi.");
        setReservationStatus("error");
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania rezerwacji:", error);
      setModalMessage("Nie udało się zarezerwować usługi. Spróbuj ponownie.");
      setReservationStatus("error");
    } finally {
      setLoading(false);
      setIsModalVisible(true);
      setTimeout(() => setIsModalVisible(false), 5000);
    }
  };
  


  return (
    <div className="bg-gradient-to-b from-custom-blue to-white px-6 py-16">
      <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl ">
        Zarezerwuj Usługę
      </h1>
      <p className="text-lg text-gray-500 text-center p-5">
        Wypełnij formularz, a my się z Tobą skontaktujemy
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded-2xl shadow-lg"
      >
        {/* Imię i nazwisko */}
        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faUser} className="mx-2 text-custom-blue" />
          Imię i Nazwisko:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl"
          />
        </label>

        {/* Email */}
        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mx-2 text-custom-blue"
          />
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl"
          />
        </label>

        {/* Telefon */}
        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faPhone} className="mx-2 text-custom-blue" />
          Telefon:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-789"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl"
          />
        </label>

        {/* Rodzaj usługi */}
        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faCogs} className="mx-2 text-custom-blue" />
          Rodzaj Usługi:
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full mt-1 p-3 pl-8 border rounded-2xl"
          >
            <option value="">Wybierz usługę</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        {/* Pakiet */}
        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faBox} className="mx-2 text-custom-blue" />
          Pakiet:
          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            className="w-full mt-1 p-3 pl-8 border rounded-2xl"
          >
            <option value="">Wybierz pakiet</option>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.title}>
                {pkg.title}
              </option>
            ))}
          </select>
        </label>

        {/* Wiadomość */}
        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faComment} className="mx-2 text-custom-blue" />
          Wiadomość:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Twoja wiadomość"
            rows="4"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl"
          ></textarea>
        </label>

        {/* Przycisk Wyślij */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600"
        >
          Wyślij
        </button>
      </form>
      <AlertModal
        message={modalMessage}
        status={reservationStatus}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default Contact;