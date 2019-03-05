import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      reverse: "",
      individuals: {},
      testCases: [
        {
          "input": "hello",
          "reverse": "olleh",
          "individuals": {
          "h": 1,
          "e": 1,
          "l": 2,
          "o": 1
          }
          }
      ]
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleClear = this.handleClear.bind(this);
  }
  handleInput(event) {
    this.setState({
      input: event.target.value
    })
    var diction = {}
    for (var i = 0; i < event.target.value.length; ++i) {
      if (event.target.value[i].toUpperCase() === event.target.value[i].toLowerCase()) {
        continue;
      }
      if (!diction[event.target.value[i]]) {
        diction[event.target.value[i]] = 1;
      }
      else {
        diction[event.target.value[i]]++;
      }
    }
    this.setState({
      individuals: diction
    })
    var splitInput = event.target.value.split("");
    var rev = splitInput.reverse();
    var word = rev.join("");
    this.setState({
      reverse: word
    })
  }

  handleSubmit(event) {
    let i = this.state.input;
    let r = this.state.reverse;
    let ind = this.state.individuals;
    this.state.testCases.unshift({input: i, reverse: r, individuals: ind})
    this.setState({
      input: "",
      reverse: "",
      individuals: {}
    })
  }

  render() {
    return (
      <div className="App">
        <h3>The following program takes a string and displays its reverse as well as a list of the unique characters in the string with its count:</h3>
        <hr></hr>
        <label htmlFor="input"><b>Input:</b></label>
        <br></br>
        <input id="input" type="text" value = {this.state.input} onChange={this.handleInput} placeholder="Type anything!"/>
        <p><b>Your input:</b> {this.state.input}</p>
        <p><b>Reverse:</b> {this.state.reverse}</p>
        <p><b>Individual letters and count:</b></p>
        {
          Object.keys(this.state.individuals).map((key, index) => ( 
            <p key={index}> {key} : {this.state.individuals[key]}</p> 
          ))
        }
        <button onClick={this.handleSubmit}>Submit to Test Cases!</button>
        <br></br>
        <hr></hr>
        <h3>Test Cases:</h3>
        <hr></hr>
        <div>
        {this.state.testCases.map((item, index) => 
          <div key={index}>
            <p><b>Word:</b> {item.input}</p>
            <p><b>Reverse:</b> {item.reverse}</p>
            <p><b>Individual letters and count:</b></p>
            {
              Object.keys(item.individuals).map((key, index) => ( 
                <p key={index}> {key} : {item.individuals[key]}</p> 
              ))
            }
            <hr></hr>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default App;

//<button onClick={this.handleClear}>Clear all entries!</button>