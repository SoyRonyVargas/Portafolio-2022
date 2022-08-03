import Background from '../../components/background'
import { Row , Col } from 'react-grid-system'
import React from 'react'
import usePersonalPage from '../../hooks/useQuery'
const PersonalView = () => {
    
    const { background } = usePersonalPage()

    console.log(background);
  
    return (
        <Background image={background}>
                <h1>hola</h1>
        </Background>
    )

}

export default PersonalView