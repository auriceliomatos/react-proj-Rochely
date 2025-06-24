import styled from "styled-components"
import { cores } from '../../../styles/globalStyles';


export const H1 = styled.h1`
  color: ${cores.verde};
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 25px;
`;
export const P = styled.p`
  font-size: 8px;
  margin-top: 20px;
  text-align: justify;
  color: ${cores.preta};
  font-size: 20px;
`;
export const Badge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const P2 = styled.p`
  font-size: 15px;
  margin-top: 20px;
  text-align: justify;
  color: ${cores.preta};
`;
    
    //estilização do card