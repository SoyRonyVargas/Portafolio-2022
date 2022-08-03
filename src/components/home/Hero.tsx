import { ContainerWithBackground } from "../../styled/Background"
import { GatsbyImage } from "gatsby-plugin-image"
import useHome from "../../hooks/useHome"
import { Grid, Item } from "./styled"
import CardHome from "../card"
import Button from "../button"
import React from "react"

const Hero = () => {
  
  const { home } = useHome()

  return (
    <ContainerWithBackground className="align-all" style={{
      height: '100vh'
    }}>
      <GatsbyImage
        className="content__bg"
        alt=""
        image={home.heroDesktop.gatsbyImageData}
        objectFit="fill"
      />
      <div className="content container">
        <Grid>
          <Item>
            <div>
            <h2 className="main__title">
              Bienvenido a SoyRonyVargas un Frontend developer de ReactJS
            </h2>
            <p>
              Soy un apasionado de la informática, el desarrollo de software y
              fotografía. Actualmente vivo en la ciudad de Cancún México, amo
              crecer como persona y un hambre de nunca parar de aprender!
            </p>
            <Button
              color="primary"
              title="VER MÁS"
              type="normal"
            />
            </div>
          </Item>
          <Item>
            <CardHome
              image={
                home.mainImage.gatsbyImageData
              }
            />
          </Item>
        </Grid>
      </div>
    </ContainerWithBackground>
  )
}

export default Hero
