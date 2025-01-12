import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7045/api/gallery")
      .then((res) => res.json())
      .then((data) => setImageUrls(data))
      .catch((err) => console.error("Błąd ładowania galerii:", err));
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigate = (direction) => {
    const newIndex =
      (selectedImageIndex + direction + imageUrls.length) % imageUrls.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-white to-custom-blue py-12"
    >
      <div className="container mx-auto p-6 my-12">
        <h1 className="pl-2 text-center text-3xl font-bold border-custom-blue md:text-5xl">
          Zobacz Nasze Realizacje
        </h1>

        {imageUrls.length === 0 ? (
          <p className="text-lg text-gray-500 text-center p-5">
            Brak zdjęć w galerii. Dodaj nowe zdjęcia!
          </p>
        ) : (
          <>
            <p className="text-lg text-gray-500 text-center p-5 mb-8">
              Nasza galeria prezentuje efekty pracy i perfekcyjne wykończenie aut.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
              {imageUrls.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-3xl shadow-lg"
                >
                  <img
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    src={image.url}
                    alt={`Car ${index + 1}`}
                    onClick={() => openModal(index)}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {selectedImageIndex !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-6">
            <div className="relative max-w-screen-lg max-h-screen lg:p-10">
              <span
                className="absolute right-4 top-4 text-white cursor-pointer text-4xl"
                onClick={closeModal}
              >
                &times;
              </span>

              {imageUrls.length > 0 ? (
                <>
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-full"
                    onClick={() => navigate(-1)}
                  >
                    {"<"}
                  </button>

                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-full"
                    onClick={() => navigate(1)}
                  >
                    {">"}
                  </button>

                  <img
                    className="w-full h-full object-contain rounded-3xl"
                    src={imageUrls[selectedImageIndex]?.url}
                    alt="Zdjęcie w galerii"
                  />
                </>
              ) : (
                <p className="text-white text-lg">Brak zdjęć do wyświetlenia.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
