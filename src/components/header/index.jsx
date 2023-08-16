import { useState } from "react";
import { Container} from "./style";

import Logo from "../../assets/Logo.png";

export const Header = () => {
    const [navMobile, setNavMobile] = useState(false)
    
    const toggleMobile = () => {
        navMobile === true ? setNavMobile(false) : setNavMobile(true)
    }

    return(
        <Container>
            <nav>
                <a href="#" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                <ul className={navMobile === false ? "close": ""}>
                    <a href="#" className="active">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                    <a href="#contact">CONTACT</a>
                </ul>
                <div className="mobile">
                    <button onClick={toggleMobile}>
                        {
                            navMobile === false ?(
                                <span className="material-symbols-outlined">menu</span>
                            ) : (
                                <span className="material-symbols-outlined">close</span>
                            )
                        }
                    </button>
                </div>
            </nav>
            <div className="content-wrapper">
                <h1>Earth</h1>
                <h2>Endless Potential</h2>
                <a href="#">Explore</a>
            </div>
        </Container>
    )
}