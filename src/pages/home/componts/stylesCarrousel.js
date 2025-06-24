import styled from "styled-components"
import { cores } from '../../../styles/globalStyles'

export const CarouselStyle = styled.div`
    width: 100%;
    height: 450px;
    
    @media (max-width: 768px) {
        height: 250px;
    }
`
export const Immg = styled.img`
    height: 600px;
    width: 100%;
 


    @media (max-width: 768px) {
        height: 200px;
    }
`
export const H1 = styled.h1`
    color: ${cores.verde};

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`
export const Pverde = styled.p`
    color: ${cores.verde};
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`