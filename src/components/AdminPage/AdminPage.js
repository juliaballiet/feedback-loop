import React, { Component } from 'react';
import Axios from 'axios';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: [],
        }
    }

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback() {
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
    }

    deleteFeedback(event){
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
    }

    render() {
        return (
            <div>
                <table>
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