import { useState, useEffect, useRef } from 'react';
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
        <div 
            className={`
                bg-green-600 text-white text-center relative bottom-0 w-full 
                transition-all duration-800 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                md:py-3 md:mt-8
                sm:py-2.5 sm:mt-5
            `}
            ref={containerRef}
        >
            <div className="flex items-center justify-center h-12">

            
            <p className={`
                m-1.5 text-sm leading-relaxed
                transition-all duration-800 ease-out delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                md:text-sm
                sm:text-xs
                sm:px-2.5
            `}>
                © {currentYear} Papelaria gotinhas de amor. Todos os direitos reservados. Desenvolvido por{' '}
                <a 
                    href="https://github.com/auriceliomatos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="
                        text-white no-underline font-bold transition-all duration-300 ease-in-out
                        inline-flex items-center gap-2
                        hover:text-gray-800 hover:underline
                        md:gap-1.5
                        sm:gap-1 sm:flex-wrap sm:justify-center
                    "
                >
                    Auricélio Matos
                    <span className="
                        inline-flex items-center justify-center text-xl transition-all duration-300 ease-in-out
                        text-white
                        hover:scale-110 hover:text-gray-800
                        md:text-lg
                        sm:text-base
                    ">
                        <FaGithub />
                    </span>
                </a>
            </p>
            </div>
        </div>
    );
};