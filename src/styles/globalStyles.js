import { createGlobalStyle } from 'styled-components';

export const cores = {
    branca: '#eee',
    preta: '#111',
    cinza: '#333',
    verde: '#10ac84',
    cinzaClaro: '#A3A3A3',
    vermelho: '#ff0000',
    selecao: '#f1c40f',
    celeste: '#222435'
}

// Breakpoints responsivos
export const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1200px'
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${cores.celeste};
        color: ${cores.branca};
        padding-top: 40px;
        overflow-x: hidden;
        
        @media (max-width: ${breakpoints.tablet}) {
            padding-top: 20px;
        }
    }
    
    .container {
        max-width: 1524px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        
        @media (max-width: ${breakpoints.tablet}) {
            padding: 0 15px;
        }
        
        @media (max-width: ${breakpoints.mobile}) {
            padding: 0 10px;
        }
    }
    
    // Melhorias para Bootstrap
    .row {
        margin: 0;
        
        @media (max-width: ${breakpoints.tablet}) {
            margin: 0 -10px;
        }
    }
    
    .col, .col-md-4 {
        padding: 0 10px;
        
        @media (max-width: ${breakpoints.tablet}) {
            margin-bottom: 20px;
        }
    }
    
    // Melhorias para cards Bootstrap
    .card {
        @media (max-width: ${breakpoints.tablet}) {
            width: 100% !important;
            max-width: 300px;
            margin: 0 auto;
        }
    }
    
    // Melhorias para carousel Bootstrap
    .carousel {
        @media (max-width: ${breakpoints.tablet}) {
            border-radius: 8px;
            overflow: hidden;
        }
    }
    
    .carousel-caption {
        @media (max-width: ${breakpoints.tablet}) {
            padding: 10px;
            bottom: 10px;
        }
        
        @media (max-width: ${breakpoints.mobile}) {
            padding: 5px;
            bottom: 5px;
        }
    }
    
    // Melhorias para formulários
    input, textarea, select {
        @media (max-width: ${breakpoints.tablet}) {
            font-size: 16px; // Evita zoom no iOS
        }
    }
    
    // Melhorias para botões
    button {
        @media (max-width: ${breakpoints.tablet}) {
            min-height: 44px; // Melhora acessibilidade touch
        }
    }
    
    // Melhorias para imagens
    img {
        max-width: 100%;
        height: auto;
    }
    
    // Melhorias para links
    a {
        @media (max-width: ${breakpoints.tablet}) {
            min-height: 44px;
            display: flex;
            align-items: center;
        }
    }
`

