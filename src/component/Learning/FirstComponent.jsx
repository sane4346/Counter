import React, {Component} from 'react'

class FirstComponent extends Component {
    render(){
      return (
        <div className = "firstComponent">
          FirstComponent
           </div>
      )
    }
  }

export class SecondComponent extends Component {
    render(){
        return (
          <div className = "secondComponent">
            SecondComponent
             </div>
        )
      }
}

export default FirstComponent