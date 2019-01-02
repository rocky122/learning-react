import React, { Fragment } from 'react'

function FragmentDemo() {
  return (
    <Fragment>
        {/* Use Fragment to have unnecessary div for the containing elements */}
        <h1>Fragment in React 16.6</h1>
        <p>Fragment in React serves as a root element for the children 
        that lies within it</p>
    </Fragment>
  )
}

export default FragmentDemo
