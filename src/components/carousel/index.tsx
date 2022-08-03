import { CarouselWrapper, WrapperRelative } from './styled';
import { CarouselProps } from './types';
import React from 'react'

const Carousel = ( props : CarouselProps ) => {

    const { children } = props

    return (
        <WrapperRelative {...props}>
            <CarouselWrapper {...props}>
                {children}
            </CarouselWrapper>
        </WrapperRelative>
    )
}

export default Carousel

export * from './CarouselItem'