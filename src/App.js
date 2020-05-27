import React, { Component } from 'react';
import FirstComponent, {SecondComponent} from './component/Learning/FirstComponent'
import ThirdComponent from './component/Learning/ThirdComponent'
import FourthComponent from './component/Learning/FunctionalComponent'
import Counter from './component/counter/Counter'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Counter></Counter>
    </div>
  );
}

/*class LearningComponent extends Component {
    render() {
      return(
        <div className = "learningComponent">
          LearningComponent
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
      </div>
      )
    }
}*/

export default App;
