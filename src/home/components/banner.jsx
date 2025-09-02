import React from "react";
// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow} from "swiper/modules";
// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// importação das imagens
const img1 = " https://i.im.ge/2025/08/28/no6azM.imagens2.png"
const img2 = " https://i.im.ge/2025/08/28/no6sth.imagens1.png"
const img3 = " https://i.im.ge/2025/08/28/no6qq8.imagens3.png"

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
    }
  ];
  
  return (

    <div className="w-full flex-col items-center justify-center bg-gray-900 " >
    <div className="w-full flex items-center justify-center">

      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow]}
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
          disableOnInteraction: true,
        }}
        className="w-full h-full  "
        style={{
          '--swiper-navigation-color': '#167ce9',
          '--swiper-pagination-color': '#168cdf'
        }}
      >
        {imagens.map((imagem) => (
          <SwiperSlide key={imagem.id} className=" w-full h-full">
            <div className="relative">
              <img 
                src={imagem.image} 
                alt='slider'
                className="w-full h-90"
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
    </div>

  );
};
