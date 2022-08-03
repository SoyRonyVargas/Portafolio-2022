import { ContainerWithBackground } from '../../styled/Background'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'
import { Props } from './types'

export const Background: FC<Props> = (props) => {

    const { children , image } = props

    return (
        <ContainerWithBackground>
            <GatsbyImage
                className="content__bg--normal"
                image={image.gatsbyImageData}
                objectFit="cover"
                alt=""
            />
            <div className="content--float">
                <div className="container">
                    { children }
                </div>
            </div>
        </ContainerWithBackground>
    )
}

export default Background