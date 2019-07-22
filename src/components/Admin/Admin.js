import React, { Component } from 'react';
import axios from 'axios';

// Not yet complete. This page will get the feedback from the database and append it to a table.
// Further functionality will allow the admin to delete feedback from the database.

class Admin extends Component {

  getFeedback = () => {
    axios.get('/feedback').then(response => {
      console.log('response data: ', response.data)
    }).catch(err => {
      console.log(err);
    })
  } // end getFeedback

  render() {
    return (
      <>
        <h1>Admin (under construction)</h1>
        <button onClick={this.getFeedback}>Get Feedback</button>
        
      </>
    )}
} // end render

export default Admin;
