// importações de estilos
import { CarouselStyle, Pverde, H1, Immg } from "./stylesCarrousel";
// importações de componentes
import img1 from "../../../assets/img2/i1.webp";
import img2 from "../../../assets/img2/i4.png";
import img3 from "../../../assets/img2/i5.png";
import { Carousel } from "react-bootstrap";

export const Carrousel = () => {
  return (
    <CarouselStyle>
      <Carousel>
        <Carousel.Item>
          <Immg
            className="d-block w-100"
            src={img1}
            alt="Primeira imagem"
          />
          <Carousel.Caption>
            <H1>Bobbie Goods</H1>
            <Pverde>Livros de colorir para todas as idades</Pverde>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Immg className="d-block w-100" src={img2} alt="Segunda imagem" />
          <Carousel.Caption>
            <H1>Canetas Coloridas</H1>
            <Pverde>Conjuntos com 24, 48 e 100 cores</Pverde>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Immg
            className="d-block w-100"
            src={img3}
            alt="Terceira imagem"
          />
          <Carousel.Caption>
            <H1>Kits Completos</H1>
            <Pverde>Livro + canetas em um só kit</Pverde>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselStyle>
  );
};
