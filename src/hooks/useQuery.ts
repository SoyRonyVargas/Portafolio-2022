import { graphql, useStaticQuery } from 'gatsby'
import { QueryGenericPage } from '../types'
import React from 'react'

const usePersonalPage = ( ) => {
    
    const data = useStaticQuery<QueryGenericPage>(graphql`
        {
            contentfulGenericSection(findId: { eq: "personal" }){
                id
                title
                image
                {
                    gatsbyImageData(
                        height: 495
                        formats: [AUTO, WEBP, AVIF]
                        quality: 100
                    )
                }
                background
                {
                    gatsbyImageData(
                        formats: [AUTO, WEBP, AVIF]
                        quality: 100
                    )
                }
            }
        }
    `)

    console.log(data);
    

    return data.contentfulGenericSection

}

export default usePersonalPage