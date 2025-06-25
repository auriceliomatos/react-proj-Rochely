import styled from "styled-components"
import { cores, breakpoints } from '../../../styles/globalStyles';

export const H1 = styled.h1`
  color: ${cores.verde};
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 25px;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const P = styled.p`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  color: ${cores.preta};
  font-weight: bold;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-top: 15px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  z-index: 1;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10px;
    padding: 3px 8px;
  }
`;