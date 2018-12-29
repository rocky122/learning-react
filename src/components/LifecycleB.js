import React, { Component } from 'react'
class LifecycleB extends Component {

   constructor(props) {
     super(props)
     this.state = {
        
     }
     console.log('[LCB]Inside the constructor method');
   }
   static getDerivedStateFromProps(props,state) {
       console.log('[LCB] getDerivedStateFromProps called....');
       return null;
   }
   
    componentDidMount = () => {
      console.log('[LCB] componentDidMount called....')
    }
    
  render() {
    console.log('[LCB] render method called....')
    return (
      <div>
        <h1>Hey render was invoked and I was rendered as 
        a result of it...</h1>
      </div>
    )
  }
}

export default LifecycleB
