import { CardProjectWrapper, CardIcon, CardTitle, CardDescription } from './styled'
import React from 'react'
import Button from '../button'

const CardProject = () => {
  return (
    <CardProjectWrapper>
      <CardIcon>

      </CardIcon>
      <div>
        <CardTitle>
          React: De cero a experto ( Hooks y MERN )
        </CardTitle>
        <CardDescription>
          Desarrollamos el software que tanto imaginas a la vida real
        </CardDescription>
      </div>
      <Button
        title='VER PROYECTO'
        type='secondary' 
      />
    </CardProjectWrapper>
  )
}

export default CardProject