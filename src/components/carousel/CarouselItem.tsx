import { CarouselTitle, CarouselItem as CarouselItemContainer , CarouselIcon } from './styled'
import React, { FC, Fragment } from 'react'
import { Props } from './types'

const ItemIcon = () => (
  <CarouselIcon src="/start.svg" alt="" />
)

const CarouselItem : FC<Props> = ( props ) => {

  const { pair = false , last = false , showStart = true , children  } = props

  return (
    <Fragment>
        <CarouselItemContainer pair={pair!}>
        {
          pair
          ?
          <Fragment>
              { children }
            {/* <CarouselTitle>
            </CarouselTitle> */}
          </Fragment>
          :
          <ItemIcon/>
        }
        </CarouselItemContainer>
        {
          (last && showStart) &&
          <CarouselItemContainer pair={!pair}>
            <ItemIcon/>
          </CarouselItemContainer>
        }
    </Fragment>
  )
}

export default CarouselItem