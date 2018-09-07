import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
        }
    }

    handleInputChange = (event) => {
        this.setState({
            rating: event.target.value,
        });
    }

    handleNextClick = (event) => {
        let action = {
            type: 'SUPPORT',
            payload: parseInt(this.state.rating)
        }

        this.props.dispatch(action);

        this.props.history.push('/4');
    }

    render(){
        return(
            <div>
                <h3>page 1 of 4</h3>
                <div>
                    <p>How well are you feeling supported?</p>
                    <br /><input onChange={this.handleInputChange}/>
                    <br /><button onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

export default connect()(SupportPage);