import * as React from "react"
import useHome from "../hooks/useHome"
import Hero from "../components/home/Hero"
import GlobalLayout from "../layout/GlobalLayout"
import Carousel from "../components/carousel"
import SkillsHome from "../components/home/skills"
import SkillView from "../views/skill-view"
import CardSkill from "../components/card-skill"
import ProjectView from "../views/project-view"
import TechnologiesView from "../views/technologies-view"
import CarouselTextView from "../views/carousel-text-view"
import PersonalView from "../views/personal-view"

const IndexPage = () => {
  
  return (
    <GlobalLayout>

     <Hero/>

     <CarouselTextView/>

     <SkillView/>

     <ProjectView/>
     
     <TechnologiesView/>
     
     <PersonalView/>

    </GlobalLayout>
  )
}

export default IndexPage
