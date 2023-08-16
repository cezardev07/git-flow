import { styled, keyframes } from "styled-components";

import Banner from "../../assets/Banner.jpg";

const opacityMobile = keyframes`
    from{
        opacity: -1;
        height: 0px;
    }
    to {
        opacity: 1;
        height: 251px;
    }
`

export const Container = styled.header`
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    background-image: url(${Banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    nav{
        position: sticky;
        top: 0;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        padding: 20px;
        z-index: 10;

        .logo{
            img{
                width: 100px;
            }
        }
        ul{
            a{
                text-decoration: none;
                color: #000;
                font-size: 18px;
                padding: 10px 20px;
                transition: all .3s ease;
                font-weight: 400;
            }
            a:hover{
                color: green;
            }
            a:focus{
                color: green;
            }
            a.active{
                color: green;
            }
        }
        .mobile{
            display: none;
            button{
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                background: #74a84a;
                cursor: pointer;
                span{
                    color: #ffffff;
                    font-weight: 600;
                }
            }
            button:hover{
                background: #305a20;
            }
        }
        
        @media (max-width: 823px) {
            .mobile{
                display: block;
            }
            ul{
                position: absolute;
                top: 90px;
                left: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1px;
                background: #305a20;
                overflow: hidden;
                animation: ${opacityMobile} 1s ease;
                z-index: 20;
                a{
                    background: #ffffff;
                    padding: 20px;
                }
            }
            ul.close{
                display: none;
            }
        }
    }

    .content-wrapper{
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 240px;
        display: flex;
        align-items: center;
        flex-direction: column;

        text-transform: uppercase;
        h1{
            color: #305a20;
            font-size: 80px;
            letter-spacing: 10px;
            font-weight: 600;
        }
        h2{
            color: #000;
            font-size: 40px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 6.3px;
            text-align: center;
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
        }
        a:hover{
            background: #305a20;
        }
    }
    @media (max-width: 823px) {
        .content-wrapper{
            margin-top: 100px;
            h1{
                color: #305a20;
                font-size: 60px;
                letter-spacing: 10px;
                font-weight: 600;
            }
            h2{
                color: #000;
                font-size: 25px;
                font-weight: 300;
                text-transform: uppercase;
                letter-spacing: 6.3px;
                text-align: center;
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
            }
        }
    }
`