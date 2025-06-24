import styled from 'styled-components';
import { cores } from '../../styles/globalStyles';

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
`

export const H1 = styled.h1`
    color: ${cores.verde};
    text-align: center;
    margin-bottom: 32px;
    font-size: 2.5rem;
    font-weight: bold;
`

export const FormContainer = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
    margin: 40px 0;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: stretch;
        gap: 24px;
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
`

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
`

export const TextArea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
`

export const Button = styled.button`
    background: #10ac84;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
        background: #0d8c6d;
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
`
