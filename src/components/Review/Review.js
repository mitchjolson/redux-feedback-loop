import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    render() {
        return (
            <>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: </h3>
            <h3>Understanding: </h3>
            <h3>Support: </h3>
            <h3>Comments: </h3>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);
