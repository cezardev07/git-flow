import { Container } from "./style";

import Logo from "../../assets/Logo.png";

export const Footer = () => {
    return(
        <Container>
            <div className="left">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <a href="#" className="center">
                <img src={Logo}/>
            </a>
            <div className="right">
                <p>©2022 Earth. All right reserved.</p>
            </div>
        </Container>
    )
}