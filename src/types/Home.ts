import { IGatsbyImageData  } from "gatsby-plugin-image"
import { GatsbyTypeImage } from "."

export type Home = {
    title: string
    heroDesktop: GatsbyTypeImage 
    mainImage: GatsbyTypeImage
}