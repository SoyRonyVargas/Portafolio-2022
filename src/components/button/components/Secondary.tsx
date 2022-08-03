import { ContainerSecondary } from '../styled'
import { Props } from '../types'
import React from 'react'

const Secondary = ( props : Props ) => {
  
    const { title } = props

    return (
    <ContainerSecondary className='button__secondary' color={props.color}>
        { title }
    </ContainerSecondary>
  )
}

export default Secondary