import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      local: "Natal",
      timezone: "+03:00"
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    this.state = {date: new Date};
  }

  render() {
    let {date} = this.state;
    return (
      <div>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;