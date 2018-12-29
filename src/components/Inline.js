import React from 'react'

// For inline styles 
const heading = {
    fontSize : '72px',
    color : 'blue'
}
function Inline() {
  return (
    <div>
    {/* Using the inline css */}
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
