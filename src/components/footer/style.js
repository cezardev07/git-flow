import { styled } from "styled-components";

export const Container = styled.footer`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding: 40px 20px;
    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        a{
            color: #000;
        }
        a:hover{
            text-decoration: underline;
        }
    }
    .center{
        img{
            width: 100px;
        }
    }
`