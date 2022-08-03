import { CardSkillWrapper, TitleSkill, DescriptionSkill, IconSkill } from './styled'
import { Container, Row, Col } from 'react-grid-system';
import React from 'react'

const CardSkill = () => {
  return (
    <CardSkillWrapper>
      <Row>
        <Col sm={2}>
          <IconSkill>
            x
          </IconSkill>
        </Col>
        <Col sm={10}>
          <TitleSkill>
            Desarrollo de Software
          </TitleSkill>
          <DescriptionSkill>
            Desarrollamos el software que tanto imaginas a la vida real
          </DescriptionSkill>
        </Col>
      </Row>
    </CardSkillWrapper>
  )
}

export default CardSkill