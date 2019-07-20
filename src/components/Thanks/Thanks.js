import React, { Component } from 'react';
import { connect } from 'react-redux';


class Thanks extends Component {
    render() {
        return (
            <>
            <h1>Thank You!</h1>
            <button>Leave New Feedback</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Thanks);