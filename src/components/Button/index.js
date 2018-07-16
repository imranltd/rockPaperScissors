import React from 'react';
import './styles.scss'

const Button = props => {
  return(<button 
    className='button'
    onClick={props.onClick}
    >{props.children}</button>)
}

export default Button;