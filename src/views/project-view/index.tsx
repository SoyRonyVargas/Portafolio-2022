import CardProject from '../../components/card-project'
import Background from '../../components/background'
import { Col, Row } from 'react-grid-system'
import Button from '../../components/button'
import { TitleH2 } from '../../styled/Text'
import { SubSpan } from '../../styled/Span'
import useHome from '../../hooks/useHome'
import React from 'react'

const ProjectView = () => {

    const { fondos } = useHome()

    console.log('fondos[0]');
    console.log(fondos);

    return (
        <Background image={fondos[0].imageDesktop}>
            <SubSpan className='text-center'>
                PROJECTS
            </SubSpan>
            <TitleH2 className='text-center title-mb-lg'>
                Best Projects
            </TitleH2>
            <Row style={{
            }}>
                <Col xs={3}>
                    <CardProject />
                </Col>
                <Col xs={3}>
                    <CardProject />
                </Col>
                <Col xs={3}>
                    <CardProject />
                </Col>
                <Col xs={3}>
                    <CardProject />
                </Col>
                <Col xs={3}>
                    <CardProject />
                </Col>
                <Col xs={3}>
                    <CardProject />
                </Col>
                <Col xs={3}>
                    <CardProject />
                </Col>
                <Col xs={3}>
                    <CardProject />
                </Col>
            </Row>

            <div className='align-all title-mt-lg'>
                <Button
                    color='primary'
                    title='VER TODO'
                    type='normal'
                />
            </div>

        </Background>
    )
}

export default ProjectView
