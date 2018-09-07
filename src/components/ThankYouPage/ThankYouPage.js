import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends Component {
    handleNewFeedback = (event) => {
        this.props.dispatch({type: 'CLEAR_FEEDBACK'});
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h1>Thank you!</h1>
                <button onClick={this.handleNewFeedback}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(ThankYouPage);