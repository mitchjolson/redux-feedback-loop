import React, { Component } from 'react';
import { connect } from 'react-redux';


class Thanks extends Component {

    handleSubmit = (event) => {
        this.props.dispatch({
            type: 'RESET',
            payload: {},
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <>
            <h1>Thank You!</h1>
            <button onClick={this.handleSubmit}>Leave New Feedback</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Thanks);