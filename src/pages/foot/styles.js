import styled from "styled-components";
import { cores, breakpoints } from '../../styles/globalStyles';

export const FooterContainer = styled.footer`
    background-color: ${cores.verde};
    color: white;
    padding: 15px 0;
    text-align: center;
    margin-top: 40px;
    position: relative;
    bottom: 0;
    width: 100%;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 12px 0;
        margin-top: 30px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 10px 0;
        margin-top: 20px;
    }
`;

export const FooterText = styled.p`
    margin: 5px 0;
    font-size: 14px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
    line-height: 1.5;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 13px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 12px;
        padding: 0 10px;
    }

    &:nth-child(1) {
        transition-delay: 0.2s;
    }

    &:nth-child(2) {
        transition-delay: 0.4s;
    }

    .visible & {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    
    @media (max-width: ${breakpoints.tablet}) {
        gap: 6px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        gap: 4px;
        flex-wrap: wrap;
        justify-content: center;
    }

    &:hover {
        color: #222435;
        text-decoration: underline;
    }
`;

export const GitHubIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: all 0.3s ease;
    color: white;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
    }

    ${FooterLink}:hover & {
        transform: scale(1.2);
        color: #222435;
    }
`; 