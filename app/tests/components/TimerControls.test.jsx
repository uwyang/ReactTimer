
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils  = require('react-addons-test-utils');
var $ = require('jquery');

var TimerControls = require('TimerControls');

describe('TimerControls', () => {
  it('should exist', () => {
    expect(TimerControls).toExist();
  });

  describe('render', ()=> {
    it('should render start button when started', ()=> {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls countStatus="stopped"/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      //button tag, with pause as part of text
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });

    it('should render pause button when started', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls countStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);

    });

    it('should render start when paused', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls countStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });

  });

});
