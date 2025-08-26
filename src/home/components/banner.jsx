import React from "react";
// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow} from "swiper/modules";
// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// importação do Link do React Router


// importação das imagens
const img1 = " https://imgs.casasbahia.com.br/1572259523/1xg.jpg?imwidth=500 ";
const img2 = " https://imgs.casasbahia.com.br/1572259523/2xg.jpg?imwidth=500 ";
const img3 = " https://imgs.casasbahia.com.br/1571890439/3xg.jpg?imwidth=500";
const img4 = " https://imgs.casasbahia.com.br/1572259523/4xg.jpg?imwidth=500 ";
const img5 = " https://imgs.casasbahia.com.br/1572259523/3xg.jpg?imwidth=500 ";

export const Banner = () => {
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
      title: "Incêndio florestal",
    },
    
  ];
  
  return (

    <div className="w-full h-130  flex-col items-center justify-center bg-gray-900 " >

      <div className="w-full flex justify-center ">
        <h1 className="text-fuchsia-700 text-4xl font-serif m-5">
        Participação de feiras
        </h1>
      </div>

    <div className="w-full h-98 flex items-center justify-center pb-2 mt-2">

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative]}
        effect="coverflow"
        slidesPerView={1}
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
        className="w-250 h-full  "
        style={{
          '--swiper-navigation-color': '#d50fb1',
          '--swiper-pagination-color': '#d50fc8'
        }}
      >
        {imagens.map((imagem) => (
          <SwiperSlide key={imagem.id} className=" w-full h-full p-2">
            <div className="relative">
              <img 
                src={imagem.image} 
                alt='slider'
                className="w-250 h-100 rounded-lg border-2 border-white"
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
    </div>

  );
};
