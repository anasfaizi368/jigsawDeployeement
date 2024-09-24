import React from 'react'
import "./Maxwidthdiv.css"
const Maxwidthdiv = (props) => {
  return (
    <div className='main_div_maxwidth' >
      <div className="child_div_maxwidth"><p className='pharagraph-maxwidth'>{props.text}</p></div>
    </div>
  )
}

export default Maxwidthdiv
