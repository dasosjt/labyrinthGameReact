import React from 'react'

const blockStyleColor = (color) => ({
    backgroundColor: color,
    width: '25px',
    height: '25px',
    display: 'flex',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
})

const blockStyle = (text) => {
  switch(text){
    case '+':
      return blockStyleColor('red')
    case ' ':
      return blockStyleColor('yellow')
    case 'g':
      return blockStyleColor('green')
    case 'p':
      return blockStyleColor('white')
    default:
      return blockStyleColor('blue')
  }
}

const Block = ({ text }) => (
  <div style={blockStyle(text)} >
    {text}
  </div>
)

export default Block