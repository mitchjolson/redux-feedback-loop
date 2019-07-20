import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feel extends Component {
    render() {
        return (
            <>
            <h1>How are you feeling today?</h1>
            <button>Next</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feel);