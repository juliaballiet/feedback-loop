import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContentPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
        }
    } // end constructor

    handleInputChange = (event) => {
        // sets state to selected rating on change
        this.setState({
            rating: event.target.value,
        });
    } // end handleInputChange

    handleNextClick = (event) => {
        let action = {
            type: 'UNDERSTANDING',
            payload: parseInt(this.state.rating)
        }
        // sends this.state.rating to redux store
        this.props.dispatch(action);
        // changes view to support page
        this.props.history.push('/3');
    } // end handleNextClick

    render(){
        return(
            <div className="Component">
                <h3>page 2 of 4</h3>
                <div className="Content">
                    <p>How well are you understanding the content?</p>
                    <div>
                        <label>
                            <input type="radio" value="1" 
                            checked={this.state.rating === '1'}
                            onChange={this.handleInputChange} />
                            1
                        </label>
                        <label>
                            <input type="radio" value="2"
                            checked={this.state.rating === '2'}
                            onChange={this.handleInputChange} />
                            2
                        </label>
                        <label>
                            <input type="radio" value="3"
                            checked={this.state.rating === '3'}
                            onChange={this.handleInputChange} />
                            3
                        </label>
                        <label>
                            <input type="radio" value="4"
                            checked={this.state.rating === '4'}
                            onChange={this.handleInputChange} />
                            4
                        </label>
                        <label>
                            <input type="radio" value="5"
                            checked={this.state.rating === '5'}
                            onChange={this.handleInputChange} />
                            5
                        </label>
                    </div>
                    <br /><button onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

export default connect()(ContentPage);