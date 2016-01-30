var React = require('react');
var History = require('react-router').History;
var SessionsApiUtil = require('./../../util/sessions_api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Navbar = require('../nav/home_page_nav');

var SessionForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function() {
    return { username: '', password: '' };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    SessionsApiUtil.login(this.state, function () {
    this.history.pushState({}, "/user/:id");
  }.bind(this));
  },


  render: function() {

    return (
      <div>
        <Navbar></Navbar>
        <form onSubmit={ this.handleSubmit }>

          <h1>Login</h1>

          <div>
            <label>Username</label>
              <input
                valueLink={this.linkState('username')}
                type="text"
                name="username"
                placeholder="Username" />
          </div>


          <div>
            <label>Password</label>
              <input
                valueLink={this.linkState('password')}
                type="password"
                name="password"
                placeholder="******" />
          </div>


          <button>Log In!</button>
        </form>

      </div>
    );
  },

});

module.exports = SessionForm;
