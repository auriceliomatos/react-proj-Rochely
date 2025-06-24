import styled from "styled-components";
import { cores } from "../../../../styles/globalStyles";

const ModalH1 = styled.h1`
    color: ${cores.verde};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
`;

const ModalP = styled.p`
    color: ${cores.preta};
    font-size: 14px;
    text-align: justify;
    line-height: 1.5;
`;

export const ButonDescricao = ({tema,descricao}) => {
    return (
        <div>
            <ModalH1>{tema}</ModalH1>
            <ModalP>{descricao}</ModalP>
        </div>
    )
}