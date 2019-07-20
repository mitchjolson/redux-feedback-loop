import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feel extends Component {

    state = {
        feel: '',
    };

    handleChangeFor = (event) => {
        this.setState({feel: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'FEEL',
            payload: this.state
        })
        this.props.history.push('/understand');
    }

    render() {
        return (
            <>
            <h1>How are you feeling today?</h1>

            <form onSubmit={this.handleSubmit}>
                <input required placeholder="How are you feeling today?" onChange={(event) => this.handleChangeFor(event)} />
                <button type="submit">Next</button>
            </form>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feel);