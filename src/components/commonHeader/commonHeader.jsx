import React from 'react'
import "./commonheader.css"
import CustomButton from '../custombutton/custombutton'

const CommonHeader = (props) => {
  return (
    <div className='common_header_main_section'>
 <h1 className='heading_1_common_header'>{props.heading_1}</h1>
 <p className='pharagraph_common_header'>{props.pharagraph}</p>
 <h2 className='heading_2_common_header' >{props.heading_2}</h2>

 <div className="button_coomon_header">

 <CustomButton  button_text="Book a free Demo"/>
 </div>
    </div>
  )
}

export default CommonHeader
