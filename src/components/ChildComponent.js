import React from 'react'

function ChildComponent({greetParent}) {
  return (
    <div>
        <button onClick={() => greetParent('child')}>Greet Parent!</button>
    </div>
  )
}

export default ChildComponent
