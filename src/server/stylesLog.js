import styled from 'styled-components';
import { cores } from '../styles/globalStyles';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: ${cores.celeste};
  
  form {
    background-color: ${cores.branca};
    padding: 2rem;
    border-radius: 8px;
    border: 2px solid ${cores.verde};
    min-width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: ${cores.verde};
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const FormGroup = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: ${cores.verde};
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${cores.verde};
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${cores.verde};
    box-shadow: 0 0 0 2px rgba(16, 172, 132, 0.2);
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${cores.verde};
  color: ${cores.branca};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    background-color: #0d8c6d;
  }
`;