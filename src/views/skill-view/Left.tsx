import CardSkill from '../../components/card-skill'
import React from 'react'
import { TitleH2 } from '../../styled/Text'
import { SubSpan } from '../../styled/Span'

const Left = () => {
  return (
    <div>
        <SubSpan>
            SKILLS
        </SubSpan>
        <TitleH2>
            My Skills
        </TitleH2>
        <CardSkill/>
        <CardSkill/>
        <CardSkill/>
    </div>
  )
}

export default Left