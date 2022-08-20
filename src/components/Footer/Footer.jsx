import NavBar from "../NavBar/NavBar";
import estilos from "./footer.module.css";

const Footer = () => {
    return(
        <footer className={estilos.footer}>
            <NavBar isFooter={false}/>
        </footer>
    )
}   

export default Footer;