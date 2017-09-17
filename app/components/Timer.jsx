var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countStatus: 'stopped',
      maxSeconds: 6,
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countStatus !== prevState.countStatus) {
      switch (this.state.countStatus) {
        case 'started':
          console.log("case started");
          this.startTimer();
          break;
        case 'stopped':
          console.log("case stoppee");
          //no break: the code for paused is going to run as well.
          this.setState({count: 0});
        case 'paused':

          console.log("case paused");
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function(){
    //e.g: switch between timer and countdown.
    console.log("component did unmount");
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      var max = this.state.maxSeconds;
      this.setState({
        count: newCount <= max ? newCount : max
      });
      if (newCount >=  max){
        this.setState({countStatus: 'stopped'});
      }
    }, 1000);
  },

  handleStatusChange: function (newStatus) {
    this.setState({countStatus: newStatus});
  },
  render: function () {
    var {count, countStatus} = this.state;
    var renderControlArea = () => {
        return <TimerControls countStatus={countStatus} onStatusChange={this.handleStatusChange}/>;
    };

    return (
      <div>
        <h1 className = "page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
