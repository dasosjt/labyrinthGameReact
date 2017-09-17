import React from 'react'

const blockStyle = {
  backgroundColor: 'blue',
  width: '50px',
  height: '50px',
  display: 'block',
  color: 'white',
  textAlign: 'center',
  alignItems: 'center'
}

const Block = ({ text }) => (
  <div style={blockStyle} >
    {text}
  </div>
)

export default Block