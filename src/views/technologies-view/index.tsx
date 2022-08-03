import CarouselItem from "../../components/carousel/CarouselItem"
import Carousel  from "../../components/carousel"
import { SubSpan } from "../../styled/Span"
import { TitleH2 } from "../../styled/Text"
import useHome from "../../hooks/useHome"
import React from "react"
import { CarouselImage } from "../../components/carousel/styled"

const TechnologiesView = () => {
    
    const { technologies } = useHome()

    return (
        <section className="container">
            <SubSpan className="text-center">PROJECTS</SubSpan>
            <TitleH2 className="text-center title-mb-lg">Best Projects</TitleH2>
            <Carousel backgroundColor="#F7F7F7">
                {
                    technologies.map( tech => (
                        <CarouselItem pair={true} showStart={false}>
                            <CarouselImage
                                image={tech.image.gatsbyImageData}
                                alt={tech.name}
                            />
                        </CarouselItem>
                    ))
                }
            </Carousel>
        </section>
    )
}

export default TechnologiesView
