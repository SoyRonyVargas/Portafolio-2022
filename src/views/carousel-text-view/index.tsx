import CarouselItem from '../../components/carousel/CarouselItem'
import { CarouselTitle } from '../../components/carousel/styled'
import Carousel from '../../components/carousel'
import useHome from '../../hooks/useHome'
import React, { Fragment } from 'react'

const CarouselTextView = () => {

    const { sliders } = useHome()

    console.log(sliders);

    return (
        <Carousel>
            <Fragment>
                {
                    sliders.map((slider, index) => (
                        <CarouselItem
                            showStart={false}
                            last={index === sliders.length - 1}
                            pair={index % 2 === 0}
                        >
                            <CarouselTitle>
                                {slider.name}
                            </CarouselTitle>
                        </CarouselItem>
                    )
                    )
                }{
                    sliders.map((slider, index) => (
                        <CarouselItem
                            showStart={false}
                            last={index === sliders.length - 1}
                            pair={index % 2 === 0}
                        >
                            <CarouselTitle>
                                {slider.name}
                            </CarouselTitle>
                        </CarouselItem>
                    )
                    )
                }
            </Fragment>
        </Carousel>
    )
}

export default CarouselTextView