var React = require('react');
var Clock = require('Clock');

var Countdown = (props) => {
  return (
    <div className="clock">
      <Clock className="clock-text" totalSeconds={234}/>
    </div>
  );
};

module.exports = Countdown;
