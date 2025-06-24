import styled from 'styled-components';
import { cores, breakpoints } from '../../styles/globalStyles';

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: auto;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 0 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 0 10px;
    }
`

export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: bold;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 2rem;
        margin-top: 30px;
        margin-bottom: 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`

export const P = styled.p`
    color: ${cores.branca};
    text-align: center;
    margin-bottom: 40px;
    font-size: 1.2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.1rem;
        margin-bottom: 30px;
        padding: 0 20px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1rem;
        margin-bottom: 20px;
        padding: 0 10px;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 20px;
    margin-bottom: 40px;
    
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 15px;
        margin-bottom: 30px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 10px;
        margin-bottom: 20px;
    }
`

export const Card = styled.div`
    position: relative;
    background-color: ${cores.celeste};
    border: 2px solid ${cores.verde};
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 12px;
    }
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(16, 172, 132, 0.3);
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
    
    @media (max-width: ${breakpoints.tablet}) {
        height: 180px;
        margin-bottom: 12px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        height: 160px;
        margin-bottom: 10px;
    }
`

export const CardTitle = styled.h3`
    color: ${cores.verde};
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.1rem;
        min-height: 45px;
        margin-bottom: 8px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1rem;
        min-height: 40px;
        margin-bottom: 6px;
    }
`

export const CardPrice = styled.p`
    color: ${cores.branca};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.3rem;
        margin-bottom: 12px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
`

export const CardButton = styled.button`
    background-color: ${cores.verde};
    color: ${cores.branca};
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 8px 16px;
        font-size: 0.85rem;
    }
    
    &:hover {
        background-color: #0d8c6d;
    }
    
    &:active {
        transform: translateY(1px);
    }
`

export const Badge = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 12px;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 10px;
        top: 8px;
        right: 8px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 9px;
        top: 5px;
        right: 5px;
    }
`;