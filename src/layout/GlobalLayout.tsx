import React from 'react'
import '../css/main.css'


const GlobalLayout = ( props : any ) => {
  return (
    <React.Fragment> { props.children } </React.Fragment>
  )
}

export default GlobalLayout