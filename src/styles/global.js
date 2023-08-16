import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html,body, #root{
        min-height: 100vh;
        background: #ffffffff;
    }
    html{
        scroll-behavior: smooth;
    }
    #root{
        position: relative;
    }
    a{
        text-decoration: none;
    }
    ::selection{
        background: #74a84a;
        color: #000;
    }
    
`