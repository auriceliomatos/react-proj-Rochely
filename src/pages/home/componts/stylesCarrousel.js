import styled from "styled-components"
import { cores, breakpoints } from '../../../styles/globalStyles'

export const CarouselStyle = styled.div`
    width: 100%;
    height: 450px;
    margin-bottom: 40px;
    
    @media (max-width: ${breakpoints.tablet}) {
        height: 300px;
        margin-bottom: 30px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        height: 200px;
        margin-bottom: 20px;
    }
`

export const Immg = styled.img`
    height: 600px;
    width: 100%;
    object-fit: cover;
    
    @media (max-width: ${breakpoints.tablet}) {
        height: 300px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        height: 200px;
    }
`

export const H1 = styled.h1`
    color: ${cores.verde};
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.8rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.2rem;
    }
`

export const Pverde = styled.p`
    color: ${cores.verde};
    font-size: 18px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 16px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
    }
`