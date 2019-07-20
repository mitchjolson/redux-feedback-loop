import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
    render() {
        return (
            <>
            <h1>How well are you being supported?</h1>
            <button>Next</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);