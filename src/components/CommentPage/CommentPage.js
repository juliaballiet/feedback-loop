import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

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
    }

    sendFeedbackToDatabase = () => {
        let dataToSend = this.props.reduxState.feedback;

        Axios({
            method: 'POST',
            url: '/feedback',
            data: dataToSend
        }).then((response) => {
            console.log('back from server with: ', response);
            this.props.history.push('/5');
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error sending the feedback');
        })
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