import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';


class Thanks extends Component {
    render() {
        return (
            <>
            <h1>Thank You!</h1>
            <button>Leave New Feedback</button>
            <Review/>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Thanks);