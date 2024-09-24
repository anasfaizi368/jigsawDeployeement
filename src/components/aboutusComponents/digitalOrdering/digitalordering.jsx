import React from 'react'
import "./digitalordering.css"
const Digitalordering = (props) => {
  return (
    <div className='main_div_digitalordering'>
   <h1 className='diitalordering_heading'>{props.heading} <span style={{color:'#2E337B'}}>{props.colorHeading}</span> </h1>
   <p className='dogitalordering_pharagraph'>{props.pharagraph}</p>
    </div>
  )
}

export default Digitalordering
