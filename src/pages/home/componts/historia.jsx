import { useState, useEffect, useRef } from "react";
import {
  Img,
  HistoriaContainer,
  HistoriaTexto,
  HistoriaImagem,
  H1,
  P,
  H3,
  Container,
} from "./stylesHistoria";

import quartel from "../../../assets/img2/h1.jpg";

export const Historia = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container className="container">
      <H1> Nossa História</H1>
      <div className="row">
        <div className="col-md-12">
          <HistoriaContainer
            className={`row ${isVisible ? "visible" : ""}`}
            ref={containerRef}
          >
            <HistoriaTexto className="col-6">
              
              <H3> Papelaria gotinhas de amor </H3>
              <P>
              Olá a todos! Para quem está chegando agora, eu sou a mamãe que deixou o mundo CLT para cuidar da saúde do meu filho e se tornou uma mãe empreendedora. Não é fácil, minha gente! A verdade é que sempre estaremos em uma batalha interna entre nossas diversas versões e escolhas.
              </P>
              <P>
              Nem todos vão apoiar seu trabalho, e nem todo amigo estará ao seu lado, e isso é completamente normal. O CNPJ de mãe nos ensina a renunciar para alcançar o lucro. Até aqui, Deus nos ajudou, e eu tenho fé que sempre estará conosco!
              </P>
              <P>
              Hoje, somos uma comunidade de 5 mil pessoas, e celebramos 3 anos de muita luta, persistência, correria e gratidão pela nossa papelaria. Muito obrigada de coração! A vida é feita de recomeços, e aqui estou, me reencontrando novamente.
              </P>
            </HistoriaTexto>
            <HistoriaImagem className="col-md-5">
              <Img src={quartel} alt="historia" />
            </HistoriaImagem>
          </HistoriaContainer>
        </div>
      </div>
    </Container>
  );
};
