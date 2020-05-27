import React, { Component } from 'react'
import './Counter.css'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'


class Counter extends Component {

        //constructor  - define the insitial state in constructor
    // set the state at start in constructor , counter = 0
    constructor(){
        super();
        this.state = { 
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render(){
        return (
            <div className="counter">
                    <CounterButton by = {100} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
                    <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
                    <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
                <span>{this.state.counter}</span>
                <div><button onClick = {this.reset} className="reset">Reset</button></div>
            </div>
        );
    }

    increment(by){
         console.log(`increment from parent ${by}`)
        this.setState( 
            (prevState) => {
            return {counter : prevState.counter + by}
        });
     }
     decrement(by){
        console.log(`increment from parent ${by}`)
       this.setState( 
           (prevState) => {
           return {counter : prevState.counter - by}
       });
    }
    reset(){
        
       this.setState( 
            {
           counter : 0
       });
    }
}

class CounterButton extends Component {

    //constructor  - define the insitial state in constructor
    // set the state at start in constructor , counter = 0
    constructor(){
        super();
        this.state = { 
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    render(){
        return(
            <div className = "counterButton">
                <button onClick = {this.increment}>+{this.props.by}</button>
                <button onClick = {this.decrement}>-{this.props.by}</button>
            </div>
        )
    }

    increment(){
       // console.log('increment')
       this.setState( 
         (prevState) =>  {
           return {counter : prevState + this.props.by}
       }
       );

       this.props.incrementMethod(this.props.by)
    }

    decrement(){
        // console.log('increment')
        this.setState( 
          (prevState) =>  {
            return {counter : prevState - this.props.by}
        }
        );
 
        this.props.decrementMethod(this.props.by)
     }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}
export default Counter;