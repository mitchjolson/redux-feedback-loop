import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },

  });

class Review extends Component {
    // get info from redux store to set the local state
    // this info will be sent to the server in the axios POST
    state = {
        feel: this.props.reduxStore.surveyReducer.feel,
        understand: this.props.reduxStore.surveyReducer.understand,
        support: this.props.reduxStore.surveyReducer.support,
        comment: this.props.reduxStore.surveyReducer.comment,
    }

    // Axios post route, sends local state to the server to be inserted in the DB
    // Then navigate to /thanks
    handleSubmit = (event) => {
        console.log('Submitting: ', this.state);
        Axios.post('/feedback', this.state)
            .then(response => {
                console.log(response);
                this.props.history.push('/thanks');
            }).catch(error => {
                console.log(error);
            })
    } // end handleSubmit
    
    // function to determine if the form can be submitted
    // checks for required data in the redux store, will return a clickable "submit" button if the required data is present
    checkButton = (store) => {
        if((store.feel) && (store.understand) && (store.support)){
            return <Button variant="contained" color="primary" className={this.props.button} onClick={this.handleSubmit}>Submit</Button>
        }
        return <Button disabled variant="contained" color="secondary" className={this.props.button}>Incomplete</Button>
    } // end checkButton


    render() {
        return (
            <>
            <div className="reviewDiv">
                <h1>Review Your Feedback</h1>
                <h3>Feelings: {this.props.reduxStore.surveyReducer.feel}</h3>
                <h3>Understanding: {this.props.reduxStore.surveyReducer.understand}</h3>
                <h3>Support: {this.props.reduxStore.surveyReducer.support}</h3>
                <h3>Comments: {this.props.reduxStore.surveyReducer.comment}</h3>
                {this.checkButton(this.props.reduxStore.surveyReducer)}
            </div>
            </>
        );
    }
} // end render

// connect to redux store
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(Review));
