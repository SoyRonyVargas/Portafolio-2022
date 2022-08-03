import styled from "styled-components";

export const CardProjectWrapper = styled.article`
    border: 3px solid #000000;
    background-color: #FFFFFF;
    border-radius: 20px;
    margin-bottom: 30px;
    max-height: 280px;
    padding: 20px;
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    transition: 300ms;
    &::after
    {
        transition: 300ms;
        background-color: #000000;
        border-radius: inherit;
        position: absolute;
        height: 100%;
        content: '';
        width: 100%;
        z-index: -1;
        right: 0;
        bottom: 0;
    }
    &:hover
    {
        background-color: #C4E8FE;
    }
    &:hover&::after
    {
        bottom: -10px;
        right: -10px;
    }
    &:hover .button__secondary
    {
        background-color: #000000;
        color: #FFFFFF;
    }
`
export const CardIcon = styled.div`
    background-color: #D0B3DF;
    border-radius: 10px;
    height: 60px;
    width: 60px;
`
export const CardTitle = styled.h4`
    font-family: 'Merriweather', serif;
    font-size: 20px;
    margin: 10px 0;
`

export const CardDescription = styled.p`
    font-size: 16px;
    margin: 0;
`
