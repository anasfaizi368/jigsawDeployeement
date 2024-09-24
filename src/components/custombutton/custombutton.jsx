import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import './custombutton.css';

const CustomButton = (props) => {
  return (
    <button className='custom_button'>
      <span>{props.button_text}</span> <FaArrowRight className="icon" />
    </button>
  );
}

export default CustomButton;
