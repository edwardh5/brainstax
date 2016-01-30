var React = require('react'),
    Header = require("./header"),
    SessionsApiUtil = require('./../util/sessions_api_util'),
    CurrentUserStore = require("./../stores/current_user_store");

var App = React.createClass({

  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    // CurrentUserStore.addListener(function () {
    //   this.setState({})
    //   this.forceUpdate()
    // }.bind(this));
    SessionsApiUtil.fetchCurrentUser();
  },

  //  move into render
  // if (!CurrentUserStore.userHasBeenFetched()) {
  //   return <p>PLEASE WAIT</p>;
  //   }
  render: function() {


    return (
      <div>
        <header><h1>brainSTAX coming from App.jsx</h1></header>
        {this.props.children}
      </div>
    );
  },

});

module.exports = App;
