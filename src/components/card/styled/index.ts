import styled from "styled-components";
import { IGatsbyImageData , GatsbyImage }from 'gatsby-plugin-image'

const spacing = 20

export const CardWrapper = styled.article`
    border: 5px solid #000000;
    background-color: #C4E8FE;
    border-radius: 15px;
    position: relative;
    max-width: 70%;
    max-height: 500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    &::after
    {
        background-color: #000000;
        border-radius: inherit;
        position: absolute;
        height: 100%; 
        content: "";
        z-index: -1;
        width: 100%;
        left: ${20}px;
        top: ${spacing}px;
    }
`

export const CardImage = styled(GatsbyImage)`
    position: absolute;
    max-height: 500px;
`