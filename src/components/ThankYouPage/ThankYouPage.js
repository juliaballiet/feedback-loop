import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends Component {
    handleNewFeedback = (event) => {
        // clears the feedback reducer in the redux store
        this.props.dispatch({type: 'CLEAR_FEEDBACK'});
        // changes view to feeling page
        this.props.history.push('/');
    } // end handleNewFeedback

    render(){
        return(
            <div className="Component">
                <h1>Thank you!</h1>
                <button onClick={this.handleNewFeedback}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(ThankYouPage);