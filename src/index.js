import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class DisplayContainer extends Component {
    constructor() {
        super();
        this.state = { text: "" }

    }

    render() {
        return (
            <div>
                <textarea value={this.state.text} onChange={this.updateValue} />
            </div>
        )
    }
}

const RawInput = ({value, updateValue}) => {

}

ReactDOM.render(<DisplayContainer />, document.getElementById('root'))