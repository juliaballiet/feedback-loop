import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import FeelingPage from '../FeelingPage/FeelingPage.js';
import ContentPage from '../ContentPage/ContentPage.js';
import SupportPage from '../SupportPage/SupportPage.js';
import CommentPage from '../CommentPage/CommentPage.js';
import ThankYouPage from '../ThankYouPage/ThankYouPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={FeelingPage} />
        <Route path="/2" component={ContentPage} />
        <Route path="/3" component={SupportPage} />
        <Route path="/4" component={CommentPage} />
        <Route path="/5" component={ThankYouPage} />
      </div>
    );
  }
}

export default App;
