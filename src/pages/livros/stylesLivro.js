import styled from 'styled-components';
import { cores } from '../../styles/globalStyles';

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0;
    margin-top: auto;
`

export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: bold;
`

export const P = styled.p`
    color: ${cores.branca};
    text-align: center;
    margin-bottom: 40px;
    font-size: 1.2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 20px;
    margin-bottom: 40px;
`

export const Card = styled.div`
    position: relative;
    background-color: ${cores.celeste};
    border: 2px solid ${cores.verde};
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
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
`

export const CardPrice = styled.p`
    color: ${cores.branca};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
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
    
    &:hover {
        background-color: #0d8c6d;
    }
`
export const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;