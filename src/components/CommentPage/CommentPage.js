import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: 0,
        }
    }

    handleInputChange = (event) => {
        this.setState({
            comment: event.target.value,
        });
    }

    handleNextClick = (event) => {
        let action = {
            type: 'COMMENTS',
            payload: this.state.comment
        }

        this.props.dispatch(action);

        this.sendFeedbackToDatabase();

        this.props.history.push('/5');
    }

    sendFeedbackToDatabase = () => {

    }

    render(){
        return(
            <div>
                <h3>page 4 of 4</h3>
                <div>
                    <p>Any comments you want to leave?</p>
                    <br /><input onChange={this.handleInputChange}/>
                    <br /><button onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(CommentPage);