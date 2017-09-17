var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils  = require('react-addons-test-utils');
var $ = require('jquery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  //done is used to by pass async nature of the setimeout test
  it('valid time passing', (done)=> {
    var spy = expect.createSpy();
    var countdown = TestUtils.renderIntoDocument(
      <Countdown />
    );
    countdown.handleSetCountdown(3);
    var $el = $(ReactDOM.findDOMNode(countdown));

    expect(countdown.state.count).toBe(3);
    expect(countdown.state.countdownStatus).toBe('started');

    //use setTimeout will be async.
    //mocha doens't like this.

    setTimeout(()=> {
      expect(countdown.state.count).toBe(2);
      done();
    }, 1001);

  });

  //done is used to by pass async nature of the setimeout test
  it('countdown never goes below 0', (done)=> {
    var spy = expect.createSpy();
    var countdown = TestUtils.renderIntoDocument(
      <Countdown />
    );
    countdown.handleSetCountdown(1);
    var $el = $(ReactDOM.findDOMNode(countdown));

    expect(countdown.state.count).toBe(1);
    expect(countdown.state.countdownStatus).toBe('started');
    //use setTimeout will be async.
    //mocha doens't like this.
    setTimeout(()=> {
      expect(countdown.state.count).toBe(0);
      done();
    }, 2001);
  });

  it("when pause status is checked, count doesn't change.", ()=> {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(2);
    countdown.handleStatusChange('paused');
    setTimeout(()=>{

        expect(countdown.state.count).toBe(2);
        expect(countdown.state.countdownStatus).toBe('paused');

    }, 1001);
  });

    it("count should reset when stopped. .", ()=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(2);
      countdown.handleStatusChange('stopped');
      setTimeout(()=>{

          expect(countdown.state.count).toBe(0);
          expect(countdown.state.countdownStatus).toBe('stopped');

      }, 1001);
    });


});
