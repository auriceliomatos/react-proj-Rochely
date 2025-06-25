import styled from "styled-components"
import { cores, breakpoints } from '../../../styles/globalStyles';


export const H1 = styled.h1`
color: ${cores.verde};
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
font-size: 30px;


@media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 8px;
}

@media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
}
`
export const P = styled.p`
font-size: 20px;
margin-top: 20px;
text-align: center;
color: ${cores.branca};

@media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-top: 15px;
}

@media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    margin-top: 10px;
    text-align: left;
}
`
export const Container = styled.div`
    margin-top: 200px;
    padding: 0 20px;
    
    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 150px;
        padding: 0 15px;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 100px;
        padding: 0 10px;
    }
    
    .row {
        @media (max-width: ${breakpoints.tablet}) {
            margin: 0 -10px;
        }
        
        @media (max-width: ${breakpoints.mobile}) {
            margin: 0 -5px;
        }
    }
    
    .col {
        @media (max-width: ${breakpoints.tablet}) {
            padding: 0 10px;
            margin-bottom: 20px;
        }
        
        @media (max-width: ${breakpoints.mobile}) {
            padding: 0 5px;
            margin-bottom: 15px;
        }
    }
`