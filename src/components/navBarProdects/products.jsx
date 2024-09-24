import React from 'react'
import "./product.css"
import "../../container/globle.css"
const products = (props) => {
  return (
    <div className='products_section_row'>
        
        <div className={`section_1_product ${props.className}`}>  <img src={props.image} alt="" /></div>
        <div className="section_2_product"><h5>{props.heading}</h5> <p>{props.pharagraph}</p></div>
    
    </div>
  )
}

export default products
