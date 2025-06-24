//importação de bibliotecas
import styled from 'styled-components'
//importação de estilos
import { Container, Title, Img, P} from './stylesRouts'
//importação de imagens
import logo from '../assets/react.svg'
//importação de componentes
import { Menu } from './menu'

//importação de links
export const Nav = () => {
    return (
        <Container>
            <Title>
                
                <div className="App-logo">
                        <Img src={logo} className="App-logo" alt="logo" 
                        />
                        
                </div>
                <P>Papelaria gotinhas de amor</P>
                <Menu/>
            </Title>
        </Container>
    )
}