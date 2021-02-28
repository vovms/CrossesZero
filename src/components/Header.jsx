import s from './Header.module.css';
import logo from '../img/logo.png'

const Header = () => {
    return (
        <div className = {s.div}>
            <div>
                <img src = {logo}  className = {s.logo_img}/>
            </div>
            <div className = {s.header_name}>Crosses Zero</div>
        </div>
    );
}

export default Header;