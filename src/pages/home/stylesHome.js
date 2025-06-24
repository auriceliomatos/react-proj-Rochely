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
    margin-bottom: 40px;
`
export const H3 = styled.h1`
    color: ${cores.verde};
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
`
export const P = styled.p`
    font-size: 17px;
    margin-top: 20px;
    text-align: justify;
    color: ${cores.branca};
    `
export const P2 = styled.p`
    font-size: 15px;
    margin-top: 20px;
    text-align: justify;
    color: ${cores.preta};
`
export const Img = styled.img`
    width: 50px;
    height: 50px;
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

    .App-logo {
            height: 7vmin;
            pointer-events: none;
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
`
