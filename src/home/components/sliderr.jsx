// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// importação das imagens
import img1 from "../../assets/img2/f1.jpeg";
import img2 from "../../assets/img2/f2.jpeg";
import img3 from "../../assets/img2/h1.jpg";

export const Slider = () => {
  const imagens = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
  ];
  
  return (
    <div className="w-full h-full bg-blue-970  ">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        slidesPerView={2}
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
        className="w-full h-full rounded-lg overflow-hidden"
        style={{
          '--swiper-navigation-color': '#10ac84',
          '--swiper-pagination-color': '#10ac84',
        }}
      >
        {imagens.map((imagem) => (
          <SwiperSlide key={imagem.id} className=" w-full h-full flex items-center justify-center">
            <img 
              src={imagem.image} 
              alt='slider'
              className="block w-full h-100 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
