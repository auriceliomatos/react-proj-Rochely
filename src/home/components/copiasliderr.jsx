import React from "react";
// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow  } from "swiper/modules";

// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// importação do Link do React Router
import { Link } from "react-router-dom";

// importação das imagens
const img1 = "https://i.im.ge/2025/08/14/JgvTzF.e9.jpeg";
const img2 = "https://i.im.ge/2025/08/14/JgvTzF.e9.jpeg";
const img3 = "https://i.im.ge/2025/08/14/JgvTzF.e9.jpeg";
const img4 = "https://i.im.ge/2025/08/14/JgvTzF.e9.jpeg";
const img5 = "https://i.im.ge/2025/08/14/JgvTzF.e9.jpeg";
const img6 = "https://i.im.ge/2025/08/14/JgvTzF.e9.jpeg";


export const Sliderr = () => {
  const imagens = [
    {
      id: 1,
      image: img1,
      title: "Incêndio florestal",
    },
    {
      id: 2,
      image: img2,
      title: "Incêndio florestal",
    },
    {
      id: 3,
      image: img3,
      title: "Incêndio monturo",
    },
    {
      id: 4,
      image: img4,
      title: "Incêndio florestal",
    },
    {
      id: 5,
      image: img5,
      title: "Captura de animal",
    },
    {
      id: 6,
      image: img6,
      title: "Incêndio florestal",
    },
  ];
  
  return (

    <div className="w-full h-full  flex-col items-center justify-center bg-gray-900 " >

      <div className="w-full flex justify-center">
        <h1 className="text-white text-3xl font-serif m-5">
        Por Dentro da Notícia
        </h1>
      </div>

    <div className="w-full h-full flex-col items-center justify-center pb-5 mt-2">

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative]}
        effect="correflow"
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full  "
        style={{
          '--swiper-navigation-color': '#c412be',
          '--swiper-pagination-color': '#d20fd5'
        }}
      >
        {imagens.map((imagem) => (
          <SwiperSlide key={imagem.id} className=" w-full h-full p-2">
            <div className="relative">
              <img 
                src={imagem.image} 
                alt='slider'
                className="w-full h-80 object-cover rounded-lg border-2 border-white"
              />
              <span className="absolute top-4 left-6 text-white text-2xl font-serif bg-black opacity-50 px-2 py-1 rounded">
                {imagem.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
    </div>

  );
};
