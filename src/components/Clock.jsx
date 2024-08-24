import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      laps: [],
    };
  }
  componentDidMount(){
    this.timer = setInterval(()=> this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  tick = () => {
    this.setState({date: new Date()})
  };
  handleLap = () => {
    const { laps, date } = this.state;
    const currentTime = date.toLocaleTimeString();
    this.setState({ laps: [...laps, currentTime] });
  };
  render() {
    const { date, laps } = this.state;
    return (
      <>
        <h2>It is {date.toLocaleTimeString()}</h2>
        <button onClick={this.handleLap} className='stopWatch-button'>Save Lap</button>
        <ul>
          {laps.map((lap, index) => (
            <li key={index} className='stopWatch-li'>
              <span className='stopWatch-lap'>Lap {index + 1}:</span>
              <span>{lap}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
 
export default Clock;