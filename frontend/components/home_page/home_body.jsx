var React = require('react');
var HomeLogin = require('./home_login');
var HomePageSignUp = require('./home_page_sign_up');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="background">
        <div className="flip-container group" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
              <div className="welcome">
                <h1>The <i>Ultimate</i> Learning Accelerator</h1>
                <hr></hr>
                <h2>Study how <i>you</i> study best with Dynamic-Sequence Flashcards technology.</h2>
              </div>
              <div className="get-started">
                <a>Get Started</a>
              </div>
        		</div>
        		<div className="back">
              <div className="get-started">
                <HomePageSignUp></HomePageSignUp>
                <HomeLogin></HomeLogin>
              </div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
});
