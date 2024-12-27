import React from "react";

const About = () => (
  <section
    id="about"
    className="flex items-center bg-gradient-to-b from-white to-custom-blue xl:h-screen"
  >
    <div className="justify-center flex-1 m-6 py-4 lg:py-10 lg:m-40">
      <div
        className="relative py-10 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("images/about-us.jpg")',
          borderRadius: "1.5rem", // Adjust this value for your desired rounded corners
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 rounded-3xl"></div>
        <div className="relative z-10 justify-center px-2 py-2 mx-auto max-w-7xl lg:py-28 md:px-7">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-5 lg:px-30 mb-2 lg:mb-4">
              <h2 className="mb-6 text-4xl font-bold text-gray-100 md:text-5xl dark:text-gray-300">
                Dlaczego My?
              </h2>
              <p className="mb-8 leading-7 text-sm lg:text-lg lg:leading-loose text-gray-400">
              W DetailPro wierzymy, że prawdziwe piękno samochodu tkwi w detalach.
              Nasza pasja do motoryzacji napędza nas do dostarczania usług na najwyższym poziomie, z dbałością o każdy, nawet najmniejszy szczegół. Wiemy, że samochód to nie tylko środek transportu – to odzwierciedlenie stylu i osobowości właściciela.
              Dlatego w DetailPro podchodzimy do każdego pojazdu z największą starannością, aby nasi klienci mogli cieszyć się samochodem, który nie tylko lśni, ale wygląda jak nowy. Naszym priorytetem jest pełna satysfakcja klienta – uważnie słuchamy, dbamy o potrzeby i dostarczamy usługi, które przewyższają oczekiwania.
              Wybierz DetailPro – miejsce, gdzie pasja do motoryzacji spotyka się z perfekcją. Gwarantujemy wyjątkowe doświadczenie i efekty, które wyróżnią Twój samochód na drodze.
              </p>
              <button className="flex px-6 py-2 font-semibold leading-loose text-gray-100 transition-all duration-300 bg-custom-blue rounded-full hover:bg-sky-600">
                Zacznij dziś
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);


// import React, { useState, useEffect } from "react";

// const About = () => {
//   const [aboutData, setAboutData] = useState({
//     title: "",
//     content: "",
//     buttonText: "",
//   });

//   useEffect(() => {
//     fetch("https://localhost:7045/api/about")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Błąd sieci: " + res.status);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Pobrane dane:", data);  // Logowanie danych do konsoli
//         setAboutData(data);  // Ustawienie danych w stanie
//       })
//       .catch((err) => {
//         console.error("Błąd ładowania danych:", err);
//       });
//   }, []);

//   return (
//     <section
//       id="about"
//       className="flex items-center bg-gradient-to-b from-white to-custom-blue xl:h-screen"
//     >
//       <div className="justify-center flex-1 m-6 py-4 lg:py-10 lg:m-40">
//         <div
//           className="relative py-10 bg-center bg-no-repeat bg-cover"
//           style={{
//             backgroundImage: 'url("images/about-us.jpg")',
//             borderRadius: "1.5rem",
//           }}
//         >
//           <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 rounded-3xl"></div>
//           <div className="relative z-10 justify-center px-2 py-2 mx-auto max-w-7xl lg:py-28 md:px-7">
//             <div className="flex flex-wrap items-center">
//               <div className="w-full px-5 lg:px-30 mb-2 lg:mb-4">
//                 <h2 className="mb-6 text-4xl font-bold text-gray-100 md:text-5xl dark:text-gray-300">
//                   {aboutData.title}
//                 </h2>
//                 <p className="mb-8 leading-7 text-sm lg:text-lg lg:leading-loose text-gray-400">
//                   {aboutData.content}
//                 </p>
//                 <button className="flex px-6 py-2 font-semibold leading-loose text-gray-100 transition-all duration-300 bg-custom-blue rounded-full hover:bg-sky-600">
//                   {aboutData.buttonText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default React.memo(About);

