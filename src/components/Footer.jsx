import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className = {s.footer}>
           <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-800x279.jpg" className = {s.img}/>
        </div>
    );
}

export default Footer;