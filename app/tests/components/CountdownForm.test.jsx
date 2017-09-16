var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils  = require('react-addons-test-utils');
var $ = require('jquery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  //spy test to use with expect.
  // if 100 is entered, then onSetCountdown should be called with argument 100.
  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

     countdownForm.refs.seconds.value = '100';
     TestUtils.Simulate.submit($el.find('form')[0]);

     expect(spy).toHaveBeenCalledWith(100);
  });

  //spy test to use with expect.
  // if 100 is entered, then onSetCountdown should be called with argument 100.
  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

     countdownForm.refs.seconds.value = 'asdf';
     TestUtils.Simulate.submit($el.find('form')[0]);

     expect(spy).toNotHaveBeenCalled();

  });

});
