import { styled } from "styled-components";
import Call_to_action from "../../assets/Call-to-action.jpg";

export const Container = styled.main`
    width: 100%;
    .cards{
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 80px;
        padding: 0 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 40px;
        .card{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            img{
                width: 100%;
                border-radius: 5px;
                object-fit: contain;
            }
            h3{
                font-size: 24px;
                font-weight: 600;
            }
            p{
                font-size: 17px;
                font-weight: 300;
            }
        }
    }

    .about{
        max-width: 1200px;
        margin: 0 auto;
        margin-bottom: 80px;
        padding: 0 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;

        .about-left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 20px;

            h2{
                font-size: 36px;
                font-weight: 400;
            }
            p{
                font-size: 18px;
                font-weight: 300;
            }
        }
        .about-right{
            width: 100%;
            img{
                width: 100%;
                aspect-ratio: 16/9;
                object-fit: cover;
            }
        }
    }
    @media (max-width: 823px) {
        .about{
            grid-template-columns: repeat(1, 1fr);
        }   
    }
    .talk{
        min-height: 60vh;
        background-image: url(${Call_to_action});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        padding: 20px;
        .content-wrapper{
            max-width: 555px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            gap: 20px;

            h2{
                color: #305a20;
                font-size: 50px;
                letter-spacing: 10px;
                font-weight: 500;
            }
            p{
                color: #000;
                font-size: 16px;
                font-weight: 300;
                line-height: 25px;
            }
            a{
                font-size: 16px;
                padding: 12px 35px;
                color: #ffffff;
                background: #74a84a;
                margin-top: 18px;
                text-decoration: none;
                transition: all .3s ease;
                letter-spacing: 3px;
                text-transform: uppercase;
            }
            a:hover{
                background: #305a20;
            }
        }
    }
`