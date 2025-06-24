//importação de bibliotecas
import styled from 'styled-components'
import { useState } from 'react'
//importação de estilos
import { Container, Title, Img, P, MenuToggle, MenuOverlay } from './stylesRouts'
//importação de imagens
import logo from '../assets/react.svg'
//importação de componentes
import { Menu } from './menu'

//importação de links
export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <MenuOverlay active={isMenuOpen} onClick={closeMenu} />
            <Container>
                <Title>
                    <div className="App-logo">
                        <Img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <P>Papelaria gotinhas de amor</P>
                    <MenuToggle onClick={toggleMenu}>
                        ☰
                    </MenuToggle>
                    <Menu isOpen={isMenuOpen} onClose={closeMenu} />
                </Title>
            </Container>
        </>
    )
}