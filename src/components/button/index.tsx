import Secondary from './components/Secondary'
import Normal from './components/Normal'
import { Props } from './types'
import React from 'react'

const Button = ( props : Props ) => {
  
  const { color , type } = props

  if( type === 'normal' ) return <Normal {...props} />
  
  if( type === 'secondary' ) return <Secondary {...props} />
  
  return <Secondary {...props} />

}

export default Button