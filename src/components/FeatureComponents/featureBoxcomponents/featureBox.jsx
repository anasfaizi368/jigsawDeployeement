import React from 'react'
import "./featureBox.css"
const featureBox = (props) => {
  return (
    <div className='featureBox_main_section'>
    {/* <h2 className='heading_one'>{props.heading_1}</h2> */}
    <h2 className={`heading_one ${props.mainClass}`}>{props.heading_1}</h2>

    <p className='text_one'>{props.text_1}</p>
    <p className='text_two'>{props.text_2}</p>
    </div>
  )
}

export default featureBox
