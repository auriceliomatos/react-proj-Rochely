import styled from "styled-components"
import { cores } from '../../../styles/globalStyles';

export const Img = styled.img`
   margin-top: 30px;
   width: 60%;
   margin-left: 1cqmax;
   height: auto;
   transition: all 0.9s ease-out;

   @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      margin-top: 10px;
   }
`
export const Container = styled.div`
    max-width: 1500px;
    margin-top: 50px;

    @media (max-width: 768px) {
      width: 100%;
    }
`
export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-top: 2cqb;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
`
export const H3 = styled.h1`
    color: ${cores.verde};
    font-size: 25px;

    margin-top: 10px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-top: 5px;
    }
`
export const P = styled.p`
    font-size: 17px;
    margin-top: 20px;
    text-align: justify;
    color: ${cores.branca};

    @media (max-width: 768px) {
      font-size: 15px;
      margin-top: 10px;
    }
    `

export const HistoriaContainer = styled.div`
    opacity: 0;
    transform: translateX(-100px);
    transition: all 0.9s ease-out;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    @media (max-width: 768px) {
      padding: 0 10px;
      transform: none;
    }
`

export const HistoriaTexto = styled.div`
    margin-top: 30px;
    width: 45%;
    margin-left: 5%;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.9s ease-out 0.3s;

    .visible & {
        opacity: 1;
        transform: translateX(0);
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      margin-top: 15px;
      transform: none;
    }
`

export const HistoriaImagem = styled.div`
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.9s ease-out 0.6s;

    .visible & {
        opacity: 1;
        transform: translateX(0);
    }

    @media (max-width: 768px) {
      transform: none;
    }
`

export const ImgCepi = styled.img`
   width: 200px;
   height: auto;
   align-items: center;
   margin-bottom: 40px;
   margin-left: 50px;

   @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
      display: block;
      margin-right: auto;
      margin-left: auto;
   }
`
export const P2 = styled.p`
   font-size: 17px;
   color: ${cores.branca};
   margin-top: 30px;
   text-align: justify;
   margin-right: 20px;
   font-weight: bold;
   margin-left: 50px;

   @media (max-width: 768px) {
      font-size: 15px;
      margin-left: 0;
      margin-right: 0;
      margin-top: 15px;
   }
`
export const P3 = styled.p`
   font-size: 15px;
   color: ${cores.preta};
   text-align: justify;
   margin-right: 30px;

   @media (max-width: 768px) {
      font-size: 14px;
      margin-right: 0;
   }
`