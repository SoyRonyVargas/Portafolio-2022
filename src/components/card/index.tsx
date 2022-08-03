import { CardWrapper } from './styled'
import React from 'react'
import { IGatsbyImageData , GatsbyImage }from 'gatsby-plugin-image'

type Props = {
  image: IGatsbyImageData
}

const CardHome  = ( props : Props ) => {
  return (
    <CardWrapper>
        <GatsbyImage alt="" image={props.image} />
    </CardWrapper>
  )
}

export default CardHome