import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understand extends Component {

    state = {
        understand: '',
    };

    handleChangeFor = (event) => {
        this.setState({understand: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'UNDERSTAND',
            payload: this.state
        })
        this.props.history.push('/support');
    }

    render() {
        return (
            <>
            <h1>How well do you understand the material??</h1>

            <form onSubmit={this.handleSubmit}>
                <input required placeholder="answer" onChange={(event) => this.handleChangeFor(event)} />
                <button type="submit">Next</button>
            </form>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understand);