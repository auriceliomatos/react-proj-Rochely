import { Link } from 'react-router-dom';
import { MenuMenu} from './stylesRouts';

export const Menu = () => {
    return (
        <MenuMenu>
        <Link to="/">Home</Link>
        <Link to="/livros">Livros</Link>
        <Link to="/canetas">Canetas</Link>
        <Link to="/contatos">Contatos</Link>
        </MenuMenu>
    )
}
