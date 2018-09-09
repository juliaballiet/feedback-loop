import React, { Component } from 'react';
import Axios from 'axios';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: [],
        }
    }

    // calls getFeedback once component has loaded
    componentDidMount = () => {
        this.getFeedback();
    } // end componentDidMount

    getFeedback = () => {
        // gets feedback from database and displays it on the dom
        Axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log('back from server with: ', response);
            this.setState({
                feedback: response.data,
            });
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an problem getting the feedback');
        })
    } // end getFeedback

    deleteFeedback = (event) => {
        // deletes feedback from database using id
        Axios({
            method: 'DELETE',
            url: '/feedback/' + event.target.value
        }).then((response) => {
            console.log('back from server with: ', response);
            this.getFeedback();
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an problem deleting the feedback');
        })
    } // end deleteFeedback

    render() {
        return (
            <div>
                <table className="Table">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map((feedback, i) => {
                            return (
                                <tr key={i}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <td><button value={feedback.id} onClick={this.deleteFeedback}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminPage;