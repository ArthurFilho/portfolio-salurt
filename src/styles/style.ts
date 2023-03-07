import styled, { css } from "styled-components";


export type ColorVariant = "primary" | "secondary";

interface ColorProps {
    Variant: ColorVariant;
}

const ColorsVariants = {
    primary: 'cyan',
    secondary: 'red',
}

export const ContainerAllPage = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContainerHeader = styled.div`
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
        span {
            color: cyan;
        }
    }

    h1 {
        margin-bottom: 1.5rem;
    }

    p {
        margin-bottom: 2rem;
    }

    button {
        border: none;
        color: black;
        background-color: cyan;
        padding: 7.5px;
        width: 60%;
        border-radius: 10px;
        margin-bottom: 5rem;
    }
`

export const ContainerAboutMe = styled.div<ColorProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;

        img {
            width: 600px;
        }

        strong {
            ${props => { return css`color: ${ColorsVariants[props.Variant]}` }}   
        }
        
        p {
            margin-bottom: 1rem;
        }

        h4 {
            margin-bottom: 1rem;
        }
`

export const ContainerBanner = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    div {
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        div {
            display: flex;
            flex-direction: column;
            gap: 0px;
            span {
                color: cyan;
            }
        }
    }
`