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

    img {
        width: 100px;
    }

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
    background-color: #474747;
    div {
        display: flex;
        gap: 200px;
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

export const ContainerAboutUs = styled.div`
    display: flex;
    height: 100%;
    margin-top: 10rem;
    align-items: center;
    justify-items: center;

        ul {
            list-style: none;
            
            li {
                margin-bottom: 10rem;
                display: flex;
                flex-direction: column;
            }
        }
        ul::before {
            content: '';
            position: absolute;
            left: 50%;
            width: 5px;
            height: 1000px;
            background-color: white;
        }
        
`

export const ListLeft = styled.li`
    display: flex;
    position: relative;
    right: 200px;

`

export const ListRight = styled.li`
    display: flex;
    position: relative;
    left: 225px;
`