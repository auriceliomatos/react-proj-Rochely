import styled from "styled-components"
import { cores, breakpoints } from '../../../styles/globalStyles';

export const Img = styled.img`
   margin-top: 30px;
   width: 60%;
   margin-left: 1cqmax;
   height: auto;
   transition: all 0.9s ease-out;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

   @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      margin-left: 0;
      margin-top: 20px;
   }
   
   @media (max-width: ${breakpoints.mobile}) {
      margin-top: 15px;
   }
`

export const Container = styled.div`
    max-width: 1500px;
    margin-top: 50px;
    padding: 0 20px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      margin-top: 40px;
      padding: 0 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 30px;
      padding: 0 10px;
    }
`

export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-top: 2cqb;
    font-size: 2.5rem;
    font-weight: bold;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2rem;
      margin-top: 1rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }
`

export const H3 = styled.h1`
    color: ${cores.verde};
    font-size: 25px;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 20px;
      margin-top: 8px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 18px;
      margin-top: 5px;
    }
`

export const P = styled.p`
    font-size: 17px;
    margin-top: 20px;
    text-align: justify;
    color: ${cores.branca};
    line-height: 1.6;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 15px;
      margin-top: 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 14px;
      margin-top: 10px;
      text-align: left;
    }
`

export const HistoriaContainer = styled.div`
    opacity: 0;
    transform: translateX(-100px);
    transition: all 0.9s ease-out;
    align-items: center;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 10px;
      transform: none;
      flex-direction: column;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      padding: 0 5px;
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

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      margin-left: 0;
      margin-top: 20px;
      transform: none;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 15px;
    }
`

export const HistoriaImagem = styled.div`
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.9s ease-out 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;

    .visible & {
        opacity: 1;
        transform: translateX(0);
    }

    @media (max-width: ${breakpoints.tablet}) {
      transform: none;
      margin-top: 20px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 15px;
    }
`

export const ImgCepi = styled.img`
   width: 200px;
   height: auto;
   align-items: center;
   margin-bottom: 40px;
   margin-left: 50px;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

   @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      max-width: 300px;
      margin-left: 0;
      margin-bottom: 20px;
      display: block;
      margin-right: auto;
      margin-left: auto;
   }
   
   @media (max-width: ${breakpoints.mobile}) {
      max-width: 250px;
      margin-bottom: 15px;
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
   line-height: 1.6;

   @media (max-width: ${breakpoints.tablet}) {
      font-size: 15px;
      margin-left: 0;
      margin-right: 0;
      margin-top: 20px;
   }
   
   @media (max-width: ${breakpoints.mobile}) {
      font-size: 14px;
      margin-top: 15px;
      text-align: left;
   }
`

export const P3 = styled.p`
   font-size: 15px;
   color: ${cores.preta};
   text-align: justify;
   margin-right: 30px;
   line-height: 1.5;

   @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
      margin-right: 0;
   }
   
   @media (max-width: ${breakpoints.mobile}) {
      font-size: 13px;
      text-align: left;
   }
`