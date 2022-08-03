import styled from "styled-components"

export const ContainerWithBackground = styled.section`
    position: relative;
    /* height: 100vh; */
    /* justify-content: center;
    align-items: center;
    display: flex; */
    .content
    {
        z-index: 2;
    }
    .content--float
    {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 2;
        left: 0;
        top: 0;
    }
    .content__bg
    {
        height: inherit;
        position: absolute;
    }
    .content__bg--normal
    {
        height: 100%;
        position: absolute;
    }
`   
