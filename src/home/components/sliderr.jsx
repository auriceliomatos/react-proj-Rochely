// importação de efeitos
import { Pagination, Navigation, Autoplay, EffectFlip, EffectFade, EffectCube, EffectCards, EffectCreative, EffectCoverflow} from "swiper/modules";

// importação de swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importação dos estilos CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        className="w-250 h-full "
        style={{
          '--swiper-navigation-color': '#10ac84',
          '--swiper-pagination-color': '#10ac84',
        }}
      >
        {imagens.map((imagem) => (
          <SwiperSlide key={imagem.id} className=" w-full h-full p-2">
            <div className="relative">
            <img 
              src={imagem.image} 
              alt='slider'
              className="w-250 h-90  rounded-lg border-2 border-white "
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
