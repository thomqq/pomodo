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
        this.intervalVar = setInterval(this.tick.bind(this), 500);
    }

    componentWillUnmount() {
        clearInterval(this.intervalVar);
    }

    componentDidUpdate() {
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '30px serif';
        ctx.fillText(`${this.state.mins} : ${this.state.secs}`, 50, 90);
    }

    renderShapeCounter() {

    }

    increaseTimer(mins, secs) {
        let extraMin = 0;
        let newSecs = Number(secs) + 1;
        if( newSecs > 59) {
            newSecs = 0;
            extraMin = 1;
        }
        let newMins = Number(mins) + extraMin;
        
        if(newMins < 10 ) {
            newMins = "0" + newMins;
        }

        if(newSecs < 10 ) {
            newSecs = "0" + newSecs;
        }
        
        return( {
            mins: newMins,
            secs: newSecs
            }
        );
    }

    tick() {
        const newValue = this.increaseTimer(this.state.mins, this.state.secs);
        this.setState(
            {
                mins: newValue.mins,
                secs: newValue.secs
            }
        );
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