import styled from 'styled-components';
import { cores, breakpoints } from '../styles/globalStyles';

export const MenuMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        color: ${cores.branca};
        text-decoration: none;
        font-size: 18px;
        transition: color 0.3s ease;
        padding: 8px 12px;
        border-radius: 4px;

        &:hover {
            color: ${cores.verde};
            background-color: rgba(16, 172, 132, 0.1);
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        position: fixed;
        top: 0;
        right: -100%;
        width: 250px;
        height: 100vh;
        background-color: ${cores.celeste};
        flex-direction: column;
        gap: 0;
        align-items: stretch;
        padding: 80px 20px 20px;
        transition: right 0.3s ease;
        z-index: 1000;
        border-left: 2px solid ${cores.verde};
        
        &.active {
            right: 0;
        }
        
        a {
            font-size: 16px;
            padding: 15px 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            
            &:last-child {
                border-bottom: none;
            }
        }
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        width: 200px;
        padding: 70px 15px 15px;
        
        a {
            font-size: 14px;
            padding: 12px 8px;
        }
    }
`

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
`

export const Title = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cores.celeste};
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 2px solid ${cores.verde};
    position: relative;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 12px 15px;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 10px 12px;
        flex-direction: column;
        text-align: center;
    }
`

export const Img = styled.img`
    width: 50px;
    height: 50px;
    
    @media (max-width: ${breakpoints.mobile}) {
        width: 40px;
        height: 40px;
    }
`

export const P = styled.p`
    font-size: 20px;
    margin: 0;
    color: ${cores.verde};
    font-weight: bold;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
    }
`

// Menu mobile toggle button
export const MenuToggle = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${cores.verde};
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: rgba(16, 172, 132, 0.1);
    }
    
    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

// Overlay para o menu mobile
export const MenuOverlay = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    
    &.active {
        display: block;
    }
    
    @media (max-width: ${breakpoints.tablet}) {
        display: ${props => props.active ? 'block' : 'none'};
    }
`