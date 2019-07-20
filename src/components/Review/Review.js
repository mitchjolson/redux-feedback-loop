import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class Review extends Component {

    state = {
        feel: this.props.reduxStore.surveyReducer.feel,
        understand: this.props.reduxStore.surveyReducer.understand,
        support: this.props.reduxStore.surveyReducer.support,
        comment: this.props.reduxStore.surveyReducer.comment,
    }

    handleSubmit = (event) => {
        console.log('Submitting: ', this.state);
        Axios.post('/feedback', this.state)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    }
    
    checkButton = (store) => {
        return <button onClick={this.handleSubmit}>Submit</button>;
        // if((store.feel) && (store.understand) && (store.support) && (store.comment)){
        //     return <button onClick={this.handleSubmit}>Submit</button>
        // }
        // return <button onClick={() => alert('Please complete the feedback form')}>Incomplete</button>
    }


    render() {
        return (
            <>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: {this.props.reduxStore.surveyReducer.feel}</h3>
            <h3>Understanding: {this.props.reduxStore.surveyReducer.understand}</h3>
            <h3>Support: {this.props.reduxStore.surveyReducer.support}</h3>
            <h3>Comments: {this.props.reduxStore.surveyReducer.comment}</h3>
            {this.checkButton(this.props.reduxStore.surveyReducer)}
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);
