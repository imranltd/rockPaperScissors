import React from 'react'

const LevelOne = props => <h1>{props.children}</h1>
const LevelTwo = props => <h2>{props.children}</h2>
const LevelThree = props => <h3>{props.children}</h3>


const Heading = props => {
  const { level } = props
  
  if(level === 1){
    return <LevelOne>{props.children}</LevelOne>
  } else if(level === 2){
    return <LevelTwo>{props.children}</LevelTwo>
  } else {
    return <LevelThree>{props.children}</LevelThree>
  }
}

export default Heading