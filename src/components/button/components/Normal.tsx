import { ButtonWrapper } from '../styled'
import { Props } from '../types'
import React from 'react'

const Normal = ({ color, title }: Props) => (
    <ButtonWrapper
        color={color}
    >
        {title}
    </ButtonWrapper>
)

export default Normal
