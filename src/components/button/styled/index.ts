import { checkColor } from "../helpers/checkColor";
import { ColorWrapper } from "../types";
import styled from "styled-components";

export const ButtonWrapper = styled.button<ColorWrapper>`
    background-color: ${ props => checkColor(props.color!) };
    border: 3px solid #000000;
    font-family: 'Lato';
    border-radius: 10px;
    padding: 10px 60px;
    position: relative;
    transition: 500ms;
    font-weight: bolder;
    cursor: pointer;
    font-size: 16px;
    &::after
    {
        transition: 500ms;
        background-color: #000000;
        border-radius: inherit;
        position: absolute;
        /* padding: inherit; */
        height: 100%;
        width: 100%;
        content: '';
        z-index: -1;
        left: 0;
        top: 0;
        left: ${9}px;
        top: ${9}px;
    }
    
    &:hover&::after
    {
        left: ${9}px;
        top: ${9}px;
    }
`

export const ContainerSecondary = styled.button<ColorWrapper>`
    background-color: #ECEBE9;
    border: 1px solid #ECEBE9;
    font-weight: bolder;
    font-family: 'Lato';
    border-radius: 7px;
    padding: 10px 60px;
    position: relative;
    transition: 500ms;
    cursor: pointer;
    font-size: 16px;
`