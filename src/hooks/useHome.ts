import { SliderContent } from '../components/carousel/types';
import { Home , Fondo , Technology } from '../types';
import { graphql, useStaticQuery } from 'gatsby'

interface QueryData {
    allContentfulHomePage: {
        nodes: Home[]
    };
    allContentfulSlider: {
        nodes: SliderContent[]
    };
    allContentfulFondos: {
        nodes: Fondo[]
    }
    allContentfulTecnologies: {
        nodes: Technology[]
    }
}

const useHome = () => {

    const { 
        allContentfulTecnologies,
        allContentfulHomePage,
        allContentfulSlider,
        allContentfulFondos 
    } = useStaticQuery<QueryData>(graphql`
         {
            allContentfulHomePage {
                nodes {
                    id
                    title
                    heroDesktop
                    {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                    mainImage
                    {
                        gatsbyImageData(
                            height: 495
                            formats: [AUTO, WEBP, AVIF]
                            quality: 100
                        )
                    }
                }
            }
            allContentfulSlider{
                nodes
                {
                    name
                    id
                }
            }
            allContentfulFondos
            {
                nodes
                {
                    imageDesktop{
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
            allContentfulTecnologies {
                nodes {
                  id
                  name
                  image {
                    gatsbyImageData(
                      width: 128
                      height: 128
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
            }
        }
    `)

    // console.log(allContentfulFondos);
    
    return {
        technologies: allContentfulTecnologies.nodes,
        home: allContentfulHomePage.nodes[0],
        sliders: allContentfulSlider.nodes,
        fondos: allContentfulFondos.nodes,
    }

}

export default useHome