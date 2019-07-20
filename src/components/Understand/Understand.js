import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understand extends Component {
    render() {
        return (
            <>
            <h1>How well are you understanding the content?</h1>
            <button>Next</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understand);