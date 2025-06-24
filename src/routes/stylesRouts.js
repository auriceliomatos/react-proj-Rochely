import styled from 'styled-components';
import { cores } from '../styles/globalStyles';

export const MenuMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        color: ${cores.branca};
        text-decoration: none;
        font-size: 18px;
        transition: color 0.3s ease;

        &:hover {
            color: ${cores.verde};
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        a {
            font-size: 15px;
        }
    }
`
export const Container = styled.div`
    max-width: 1500px;
    margin: 0 ;
    padding: 0 ;
`
export const Title = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cores.celeste};
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 2px solid ${cores.verde};
`
export const Img = styled.img`
    width: 50px;
    height: 50px;
`
export const P = styled.p`
    font-size: 20px;
    margin: 0;
    color: ${cores.verde};
    font-weight: bold;
    left: 10px;
    
`