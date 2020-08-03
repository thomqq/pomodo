import React from 'react'

class Counter extends React.Component {

    state = {
        mins: '00',
        secs: '00'
    }

    constructor(props) {
        super(props);
        this.counterCanvasRef = React.createRef();
      }

    componentDidMount() {
        this.renderCounter();
    }

    renderCounter() {
        if( this.props.type === 'text') {
            this.renderTextCounter();
        } else {
            this.renderShapeCounter();
        }
    }

    renderTextCounter() {
        let canvas = this.counterCanvasRef.current;
        let ctx = canvas.getContext("2d");
        ctx.font = '30px serif';
        ctx.fillText(`${this.state.mins} : ${this.state.secs}`, 50, 90);
    }

    renderShapeCounter() {

    }


    
    render() {
        return (
            <div>
                <canvas ref={this.counterCanvasRef} />
            </div> 
        )
    }
}

export default Counter;