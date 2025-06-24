import styled from 'styled-components';
import { cores, breakpoints } from '../../styles/globalStyles';

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
    
    @media (max-width: ${breakpoints.tablet}) {
        padding: 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 10px;
    }
`

export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-bottom: 32px;
    font-size: 2.5rem;
    font-weight: bold;
    
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 2rem;
        margin-bottom: 24px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
`

export const FormContainer = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
    margin: 40px 0;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        align-items: stretch;
        gap: 24px;
        margin: 30px 0;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        gap: 20px;
        margin: 20px 0;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 400px;
    gap: 16px;
    background: ${cores.celeste};
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    
    @media (max-width: ${breakpoints.tablet}) {
        min-width: auto;
        max-width: none;
        width: 100%;
        padding: 20px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 16px;
        gap: 12px;
    }
    
    label {
        color: ${cores.branca};
        font-weight: bold;
        margin-bottom: 4px;
        
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 14px;
        }
    }
`

export const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    background: white;
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 10px;
        font-size: 16px;
    }
    
    &:focus {
        outline: none;
        border-color: ${cores.verde};
        box-shadow: 0 0 0 2px rgba(16, 172, 132, 0.2);
    }
`

export const TextArea = styled.textarea`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    background: white;
    resize: vertical;
    min-height: 100px;
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 10px;
        font-size: 16px;
        min-height: 80px;
    }
    
    &:focus {
        outline: none;
        border-color: ${cores.verde};
        box-shadow: 0 0 0 2px rgba(16, 172, 132, 0.2);
    }
`

export const Button = styled.button`
    background: #10ac84;
    color: #fff;
    border: none;
    padding: 14px;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    
    @media (max-width: ${breakpoints.mobile}) {
        padding: 12px;
        font-size: 16px;
    }
    
    &:hover {
        background: #0d8c6d;
    }
    
    &:active {
        transform: translateY(1px);
    }
`

export const MapContainer = styled.div`
    min-width: 320px;
    max-width: 400px;
    width: 100%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    
    @media (max-width: ${breakpoints.tablet}) {
        min-width: auto;
        max-width: none;
        height: 250px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        height: 200px;
    }
    
    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`
