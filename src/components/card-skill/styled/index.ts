import styled from "styled-components";

export const CardSkillWrapper = styled.div`
    border: 0px solid #000000;
    border: 4px solid #FFFFFF;
    /* background-color: #C4E8FE; */
    background-color: #FFFFFF;
    -webkit-transition: 500ms;
    font-weight: bolder;
    border-radius: 13px;
    border-radius: 15px;
    position: relative;
    transition: 200ms;
    padding: 25px;
    cursor: pointer;
    font-size: 16px;
    width: 80%;
    margin-bottom: 30px;
    &::after
    {
        -webkit-transition: 500ms;
        transition: 500ms;
        background-color: #000000;
        border-radius: inherit;
        position: absolute;
        height: 100%;
        width: 100%;
        content: '';
        z-index: -1;
        right: 0;
        bottom: 0;
    }
    &:hover
    {
        border-color: #000000;
    }
    &:hover&::after
    {
        right: -9px;
        bottom: -9px;
    }
`
export const TitleSkill = styled.h3`
    font-family: 'Lato';
    font-weight: 600;
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 10px;
`

export const DescriptionSkill = styled.p`
    font-weight: normal;
    font-size: 18px;
    margin-top: 0;
    width: 90%;
`

export const IconSkill = styled.div`
    background: #D0B3DF;
    border-radius: 20px;
    width: 60px;
    height: 60px;
`