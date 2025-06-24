import styled from "styled-components"
import { cores } from '../../../styles/globalStyles'

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 ;
`
export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
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

export const A = styled.a`
   color: ${cores.verde};
   text-decoration: none;
   font-weight: bold;
`
