import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comment extends Component {
    render() {
        return (
            <>
            <h1>Any comments you would like to leave?</h1>
            <button>Next</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comment);