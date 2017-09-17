var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    countStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    //Since Countdown.jsx is calling it, calls handleStatusChange
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
/*
  componentWillReceiveProps: function(newProps){
      console.log("componentWillRecieveProps ", newProps.countStatus);
  },
*/

  render: function () {
    var {countStatus} = this.props;
    var renderStartPauseButton = () => {
      if (countStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countStatus === 'paused' || countStatus === 'stopped') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartPauseButton()}
        <button className="button hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = TimerControls;
