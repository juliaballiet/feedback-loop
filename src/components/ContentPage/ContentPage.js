import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContentPage extends Component {
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
            type: 'UNDERSTANDING',
            payload: parseInt(this.state.rating)
        }

        this.props.dispatch(action);

        this.props.history.push('/3');
    }

    render(){
        return(
            <div>
                <h3>page 2 of 4</h3>
                <div>
                    <p>How well are you understanding the content?</p>
                    <br /><input onChange={this.handleInputChange}/>
                    <br /><button onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

export default connect()(ContentPage);