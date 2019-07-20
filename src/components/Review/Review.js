import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    render() {
        return (
            <>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: {this.props.reduxStore.surveyReducer.feel}</h3>
            <h3>Understanding: {this.props.reduxStore.surveyReducer.understand}</h3>
            <h3>Support: {this.props.reduxStore.surveyReducer.support}</h3>
            <h3>Comments: {this.props.reduxStore.surveyReducer.comment}</h3>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);
