import { Container, Row, Col } from 'react-grid-system';
import CardSkill from '../../components/card-skill'
import GlobalLayout from '../../layout/GlobalLayout'
import React from 'react'
import Left from './Left';
import Right from './Right';

const SkillView = () => {
  return (
    <section className='container'>
      <Row>
        <Col sm={6}>
          <Left/>
        </Col>
        <Col className='align-all' sm={6}>
          <Right/>
        </Col>
      </Row>
    </section>
  )
}

export default SkillView