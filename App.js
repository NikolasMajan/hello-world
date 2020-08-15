import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator'
import Char from './Char/Char'

class App extends Component {
  state = {
    length: 0,
    value : ''
  }

  changeLenghtHandler = (event) => {
    const copiedLength =event.target.value.length;
    const copiedValue = event.target.value; 
    this.setState({
      length: copiedLength,
      value: copiedValue
    }) 
  }
  deleteCharHandler = (charIndex) => { 
                    
      const part1 = this.state.value.substring(0, charIndex);
      const part2 = this.state.value.substring(charIndex + 1, this.state.value.length);
      const newValue = part1 + part2;
    this.setState(
      {
        value : newValue
      });

  }
  

  render() {    
    
      
    let chars  = Array.from(this.state.value);


    const char = (
      <div>
        {chars.map((char, index) =>{return(<Char click ={ () => this.deleteCharHandler(index)} char={char} />)})}
      </div>
    ) ;
      
      
    return (
      <div className="App">
        <input type = 'text' onChange = {(event) => this.changeLenghtHandler(event)} value ={this.state.value}/>
        <Validator length = {this.state.length}/>
        {char}        

      </div>
    );
  }
}

export default App;
