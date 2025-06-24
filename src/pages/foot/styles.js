import styled from "styled-components";
import { cores } from '../../styles/globalStyles';

export const FooterContainer = styled.footer`
    background-color: ${cores.verde};
    color: white;
    padding: 10px 0;
    text-align: center;
    margin-top: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
`;

export const FooterText = styled.p`
    margin: 5px 0;
    font-size: 14px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;

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
    gap: 10px;

    &:hover {
        color: #222435;
        text-decoration: underline;
    }
`;

export const GitHubIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transition: all 0.3s ease;
    color: white;

    ${FooterLink}:hover & {
        transform: scale(1.2);
        color: #222435;
    }
`; 