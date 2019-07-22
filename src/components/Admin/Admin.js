import React, { Component } from 'react';
import axios from 'axios';


class Admin extends Component {

  getFeedback = () => {
    axios.get('/feedback').then(response => {
      console.log('response data: ', response.data)
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <>
        <h1>Admin (under construction)</h1>
        <button onClick={this.getFeedback}>Get Feedback</button>
        
      </>
    )}
}

export default Admin;
