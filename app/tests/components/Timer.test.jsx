var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils  = require('react-addons-test-utils');
var $ = require('jquery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  //done is used to by pass async nature of the setimeout test
  it('valid time passing', (done)=> {
    var spy = expect.createSpy();
    var timer = TestUtils.renderIntoDocument(
      <Timer />
    );
    timer.handleStatusChange('started');
    var $el = $(ReactDOM.findDOMNode(timer));

    expect(timer.state.count).toBe(0);
    expect(timer.state.countStatus).toBe('started');

    //use setTimeout will be async.
    //mocha doens't like this.

    setTimeout(()=> {
      expect(timer.state.count).toBe(2);
      done();
    }, 2001);

  });

  //done is used to by pass async nature of the setimeout test
  it('timer never goes above the maxSeconds', (done)=> {
    var spy = expect.createSpy();
    var timer = TestUtils.renderIntoDocument(
      <Timer />
    );
    timer.handleStatusChange('started');
    var $el = $(ReactDOM.findDOMNode(timer));

    timer.setState({count: 5});
    expect(timer.state.countStatus).toBe('started');
    //use setTimeout will be async.
    //mocha doens't like this.
    setTimeout(()=> {
      expect(timer.state.count).toBe(0);
      expect(timer.state.countStatus).toBe('stopped');
      done();
    }, 2001);
  });

  it("when pause status is checked, count doesn't change.", ()=> {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 2});
    timer.handleStatusChange('paused');
    setTimeout(()=>{
        expect(timer.state.count).toBe(2);
        expect(timer.state.countStatus).toBe('paused');

    }, 1001);
  });

});
