import { TitleH2 } from '../../../styled/Text'
import React from 'react'
import { SubSpan } from '../../../styled/Span'
import CardSkill from '../../card-skill'
import { GridSkills } from './styled'

const SkillsHome = () => {
  return (
    <section className='container'>

      <SubSpan className='text-center'>
        SKILLS
      </SubSpan>

      <TitleH2 className='text-center'>
        My Skills
      </TitleH2>

      <GridSkills>
        {
          [1,2,3,4].map( ele => 
            <CardSkill/>
          )
        }
      </GridSkills>

    </section>
  )
}

export default SkillsHome