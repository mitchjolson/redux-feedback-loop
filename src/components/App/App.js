import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feel from '../Feel/Feel';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Thanks from '../Thanks/Thanks';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  getFeedback = () => {
    axios.get('/feedback').then(response => {
      console.log('response data: ', response.data)
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
        </div>
        <main>
          <Route exact path='/' component={Feel} />
          <Route path='/understand' component={Understand} />
          <Route path='/support' component={Support} />
          <Route path='/comment' component={Comment} />
          <Route path='/thanks' component={Thanks} />
          <Route path='/review' component={Review} />
          <Route path='/admin' component={Admin} />
        </main>
      </Router>
    );
  }
}

export default App;
