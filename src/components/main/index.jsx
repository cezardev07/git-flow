import { Container } from "./style";

import Service_1_min from "../../assets/Service-1-min.jpg";
import Service_2_min from "../../assets/Service-2-min.jpg";
import Service_3_min from "../../assets/Service-3-min.jpg";
import Our_Mission_min from "../../assets/Our-Mission-min.jpg";

export const Main = () => {
    return(
        <Container>
            <section className="cards">
                <div className="card">
                    <img src={Service_1_min} alt="" />
                    <h3>Web Design</h3>
                    <p>Custom web design for small businesses, we help you capture new audiences and increase your sales. </p>
                </div>
                <div className="card">
                    <img src={Service_2_min}/>
                    <h3>Graphic Design</h3>
                    <p>Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones. </p>
                </div>
                <div id="services" className="card">
                    <img src={Service_3_min}/>
                    <h3>Content Creation</h3>
                    <p>Want to attract people to your website?  You have to have the best content in the world. That’s what we do.</p>
                </div>
            </section>  
            <section id="about" className="about">
                <div className="about-left">
                    <h2>About us</h2>
                    <p>I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure. </p>
                </div>
                <div className="about-right">
                    <img src={Our_Mission_min} alt="" />
                </div>
            </section>
            <section id="contact" className="talk">
                <div className="content-wrapper">
                    <h2>Talk to us</h2>
                    <p>Have any questions? We are always open to talk about your business, new projects, creative opportunities and how we can help you.</p>
                    <a href="#">Get In Touch</a>
                </div>
            </section>   
        </Container>
    )
}