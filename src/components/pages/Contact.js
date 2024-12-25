import {
  faBox,
  faCheck,
  faCogs,
  faComment,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";

// AlertModal component for displaying messages
const AlertModal = ({ isOpen, message, onClose }) => {
  return (
    <div
      className={`fixed inset-0 overflow-auto ${isOpen ? "flex" : "hidden"}`}
    >
      <div className="flex items-center mx-auto justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <p className="text-lg font-semibold mb-4">{message}</p>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for form data, modal display, and loading
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    packageType: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update packageType options based on serviceType
    if (name === "serviceType") {
      let updatedPackageTypeOptions = [];
      switch (value) {
        case "Paint Correction":
          updatedPackageTypeOptions = ["Entry-Level", "Premium"];
          break;
        case "Ceramic Coating":
          updatedPackageTypeOptions = [
            "Entry-Level",
            "Standard",
            "Premium",
            "Elite",
          ];
          break;
        default:
          updatedPackageTypeOptions = [];
          break;
      }

      // Update form data
      setFormData({
        ...formData,
        [name]: value,
        packageType: "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      setModalMessage("Please fill out all fields before submitting.");
      setShowModal(true);
      return;
    }

    // Set loading to true during form submission
    setLoading(true);

    try {
      // Sending email using EmailJS
      const emailResponse = await emailjs.send(
        "service_8pbzzr9",
        "template_gukzhjj",
        formData,
        "EfGTdTFgjfpRrAh7I"
      );

      console.log("Email sent successfully:", emailResponse);
      setModalMessage("Email sent successfully!");
      setShowModal(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setModalMessage("Error sending email. Please try again later.");
      setShowModal(true);
    } finally {
      // Set loading back to false after form submission
      setLoading(false);
    }

    // Backend submission logic...
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-b from-custom-blue to-white px-6 py-16">
      <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl ">
        Zarezerwuj Usługę
      </h1>
      <p className="text-lg text-gray-500 text-center p-5">Zacznijmy już teraz</p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded-2xl shadow-lg"
      >
        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faUser} className="mx-2 text-custom-blue" />
          Imię i Nazwisko:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl focus:outline-none focus:border-blue-500"
          />
        </label>

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
            placeholder="jankowalski@example.com"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faPhone} className="mx-2 text-custom-blue" />
          Telefon:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-789"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faCogs} className="mx-2 text-custom-blue" />
          Rodzaj Usługi:
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            placeholder="Wybierz Rodzaj Usługi"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>
              Wybierz Rodzaj Usługi
            </option>
            <option value="Paint Correction">Korekta Lakieru</option>
            <option value="Ceramic Coating">Powłoka Ceramiczna</option>
          </select>
        </label>

        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faBox} className="mx-2 text-custom-blue" />
          Rodzaj Pakietu:
          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            disabled={formData.serviceType === ""}
            placeholder="Wybierz Rodzaj Pakietu"
            className="w-full mt-1 p-3 pl-8 border rounded-2xl focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>
              Wybierz Rodzaj Pakietu
            </option>
            {formData.serviceType === "Paint Correction" && (
              <>
                <option value="Entry-Level">Podstawowy</option>
                <option value="Premium">Premium</option>
              </>
            )}
            {formData.serviceType === "Ceramic Coating" && (
              <>
                <option value="Entry-Level">Podstawowy</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Elite">Elitarny</option>
              </>
            )}
          </select>
        </label>

        <label className="block text-sm font-semibold text-gray-600 my-3">
          <FontAwesomeIcon icon={faComment} className="mx-2 text-custom-blue" />
          Wiadomość:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Wpisz swoją wiadomość"
            rows="4"
            className="w-full mt-1 p-2 pl-8 border rounded-2xl focus:outline-none focus:border-blue-500"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-105"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Wysyłanie...
            </div>
          ) : (
            <>
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Wyślij
            </>
          )}
        </button>
      </form>

      <AlertModal
        isOpen={showModal}
        message={modalMessage}
        onClose={closeModal}
      />
    </div>
  );
};


export default Contact;
