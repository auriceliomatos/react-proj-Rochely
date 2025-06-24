import { Link } from 'react-router-dom';
import { MenuMenu} from './stylesRouts';

export const Menu = ({ isOpen, onClose }) => {
    const handleLinkClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <MenuMenu className={isOpen ? 'active' : ''}>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            <Link to="/livros" onClick={handleLinkClick}>Livros</Link>
            <Link to="/canetas" onClick={handleLinkClick}>Canetas</Link>
            <Link to="/contatos" onClick={handleLinkClick}>Contatos</Link>
        </MenuMenu>
    )
}
