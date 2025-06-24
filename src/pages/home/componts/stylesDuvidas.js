import styled from "styled-components"
import { cores, breakpoints } from '../../../styles/globalStyles'

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 0 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 0 10px;
    }
    
    .accordion {
        margin-top: 30px;
        
        @media (max-width: ${breakpoints.tablet}) {
            margin-top: 20px;
        }
        
        @media (max-width: ${breakpoints.mobile}) {
            margin-top: 15px;
        }
    }
    
    .accordion-button {
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 14px;
            padding: 12px 15px;
        }
    }
    
    .accordion-body {
        @media (max-width: ${breakpoints.mobile}) {
            padding: 12px 15px;
        }
    }
`

export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: bold;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 2rem;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 20px;
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

export const A = styled.a`
   color: ${cores.verde};
   text-decoration: none;
   font-weight: bold;
   transition: color 0.3s ease;
   
   &:hover {
       color: #0d8c6d;
       text-decoration: underline;
   }
`
