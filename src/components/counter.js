import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.counterCanvas);
        let ctx = canvas.getContext("2d");
    }

    render() {
        return (
            <div>
                <canvas id='counterCanvas' ref='counterCanvas' />
            </div>
        )
    }
}

export default Counter;