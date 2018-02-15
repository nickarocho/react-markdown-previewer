import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
var marked = require('marked');

class DisplayContainer extends Component {
    constructor() {
        super();
        this.state = { text: "" }
    }

    updateValue = e => {
        this.setState( {text: e.target.value} )
    }

    createMarkup = e => {
       return {__html: marked(e) };
    }
      
    MyComponent = e => {
        return <div dangerouslySetInnerHTML={this.createMarkup(e)} />;
    }

    render() {
        return (
            <div>
            <h1>markdown <span className="markdown">Madness</span></h1>
                <div className="App-container">
                    <div className="input">
                        <h3>type some markdown here</h3>
                        <hr />
                        <textarea value={this.state.text} onChange={this.updateValue} />
                    </div>
                    <div className="output">
                        <h3 className="pretty">See the pretty stuff here</h3>
                        <hr />
                        {this.MyComponent(this.state.text)}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<DisplayContainer />, document.getElementById('root'))