import { useState, useEffect, useRef } from 'react';
import { FooterContainer, FooterText, FooterLink, GitHubIcon } from './styles';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <FooterContainer className={isVisible ? 'visible' : ''} ref={containerRef}>
            <FooterText>
                © {currentYear} Papelaria gotinhas de amor. Todos os direitos reservados.  Desenvolvido por{' '}
                <FooterLink href="https://github.com/auriceliomatos" target="_blank" rel="noopener noreferrer">Auricélio Matos
                <GitHubIcon>
                <FaGithub />
                </GitHubIcon>
                </FooterLink>
            </FooterText>
        </FooterContainer>
    );
};