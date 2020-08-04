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
        this.resetStoredTime();
        this.renderCounter();
        this.intervalVar = setInterval(this.tick.bind(this), 500);
    }

    componentWillUnmount() {
        clearInterval(this.intervalVar);
    }

    componentDidUpdate() {
        this.renderCounter();
    }
    
    resetStoredTime() {
        let now = new Date();
        this.setState(
            {
                date: now,
                mins: '00',
                secs: '00'
            }
        );
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '30px serif';
        ctx.fillText(`${this.state.mins} : ${this.state.secs}`, 50, 90);
    }

    renderShapeCounter() {

    }

    tick() {
        let now = new Date();
        let diffDate = new Date( now - this.state.date );
        let newMins = this.addLeadingZero(diffDate.getMinutes());
        let newSecs = this.addLeadingZero(diffDate.getSeconds());
        this.setState(
            {
                mins: newMins,
                secs: newSecs
            }
        );
    }

    addLeadingZero(number) {
        let result = "";
        if( number < 10 ) {
            result = "0"
        }
        result += number;
        return result;
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