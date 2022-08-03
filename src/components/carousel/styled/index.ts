import styled from "styled-components";
import { GatsbyImage } from 'gatsby-plugin-image'
import { CarouselProps } from "../types";

const WidthItem = 250
const WidthItemIcon = 50

export const WrapperRelative = styled.section<CarouselProps>`
    position: relative;
    overflow: hidden;
    height: 140px;
    &::before, &::after {
        background: linear-gradient(to right, ${ props => props.backgroundColor || '#000000' } 0%, rgba(0, 0, 0, 0) 100%);
        content: "";
        height: 100%;
        position: absolute;
        width: 200px;
        z-index: 2;
    }
    &::after {
        right: 0;
        top: 0;
        -webkit-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
    }
    &::before {
        left: 0;
        top: 0;
    }
`
export const CarouselWrapper = styled.section<CarouselProps>`
    background: ${ props => props.backgroundColor || '#000000' };
    align-items: center;
    position: absolute;
    display: flex;
    padding: 30px;
    animation: scroll 40s linear infinite; 
    -webkit-animation: scroll  40s linear infinite;
    height: 100%;
    @keyframes scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            transform: translateX(-${  7 * WidthItem }px);
        }
    }

`

export const CarouselItem = styled.article<{ pair: boolean }>`
    width: ${ props => props.pair ? WidthItem : WidthItemIcon }px;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 30px;
    display: flex;
`

export const CarouselIcon = styled.img`
    height: 25px;
    width: 25px;
`

export const CarouselImage = styled(GatsbyImage)`
    width: 90px;
    height: 90px;
`

export const CarouselTitle = styled.h4`
    font-family: 'Lato', serif;
    font-size: 35px;
    color: #fff;
`