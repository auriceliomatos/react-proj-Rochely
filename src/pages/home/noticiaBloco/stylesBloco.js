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
  font-size: 12px;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 10px;
    top: 8px;
    right: 8px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 9px;
    top: 5px;
    right: 5px;
  }
`;
export const P2 = styled.p`
  font-size: 15px;
  margin-top: 20px;
  text-align: justify;
  color: ${cores.preta};
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    margin-top: 15px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    margin-top: 10px;
    text-align: left;
  }
`;
    
    //estilização do card