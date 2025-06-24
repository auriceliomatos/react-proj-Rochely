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
    margin-bottom: 40px;
    font-size: 2.5rem;
    
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

export const H3 = styled.h1`
    color: ${cores.verde};
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
        margin-top: 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
        margin-top: 10px;
    }
`

export const P = styled.p`
    font-size: 17px;
    margin-top: 20px;
    text-align: justify;
    color: ${cores.branca};
    
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

export const P2 = styled.p`
    font-size: 15px;
    margin-top: 20px;
    text-align: justify;
    color: ${cores.preta};
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 14px;
        margin-top: 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 13px;
        margin-top: 10px;
        text-align: left;
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

    .App-logo {
        height: 7vmin;
        pointer-events: none;
        
        @media (max-width: ${breakpoints.tablet}) {
            height: 6vmin;
        }
        
        @media (max-width: ${breakpoints.mobile}) {
            height: 5vmin;
        }
    }
    
    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }
    
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
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
