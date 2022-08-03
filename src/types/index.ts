import { IGatsbyImageData } from "gatsby-plugin-image"

export type GatsbyTypeImage = {
    gatsbyImageData: IGatsbyImageData
} 

export type QueryGenericPage = {
    contentfulGenericSection: {
        title: string
    description: string
    color: string | undefined | null
    url: string | undefined | null
    image: GatsbyTypeImage
    background: GatsbyTypeImage
    }
}

export * from './Technology'
export * from './Fondos'
export * from './Home'