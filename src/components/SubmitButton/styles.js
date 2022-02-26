import styled from "styled-components"

export const Button = styled.button`
    background: #8d00ff;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    &[disabled] {
        opacity: 0.3;
    }
`