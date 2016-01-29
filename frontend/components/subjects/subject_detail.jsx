var React = require('react');
var ApiUtil = require('../../util/api_util');
var Subject = require('./subject');
var SubjectNav = require('./subjectnav');
var SubjectList = require("./subject_list");
var SubjectStore = require("../../stores/subject");

module.exports = React.createClass({
  getStateFromStore: function() {
    return { subject: SubjectStore.find(parseInt(this.props.params.id)) };
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function() {
    return { subject: null };
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchSingleSubject(parseInt(newProps.params.id));
  },

  componentDidMount: function() {
    this.subjectListener = SubjectStore.addListener(this._onChange);
    ApiUtil.fetchSingleSubject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function() {
    this.subjectListener.remove();
  },

  render: function() {
    if (!(this.state.subject && this.state.subject.decks)) { return <div></div>; }
    return (
      <div className="subject-detail-main">
        <Subject className="title" subject={this.state.subject} />

        <div className="decklist">
          <h5>DECKS</h5>
          <ul>
            {this.state.subject.decks.map(function(deck) {
              return (
                <li key={deck.id} className="deck">
                  <a href="">{deck.name}</a>
                </li>
              );
            }.bind(this))}
          </ul>
        </div>

        {this.props.children}

      </div>
    );
  }
});
