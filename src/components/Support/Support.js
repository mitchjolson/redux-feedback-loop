import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    state = {
        support: '',
    };

    handleChangeFor = (event) => {
        this.setState({support: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SUPPORT',
            payload: this.state
        })
        this.props.history.push('/comment');
    }

    render() {
        return (
            <>
            <h1>How well are you being supported?</h1>

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

export default connect(mapStateToProps)(Support);