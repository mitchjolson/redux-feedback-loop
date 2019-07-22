import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';


class Comment extends Component {

    state = {
        comment: '',
    };

    handleChangeFor = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'COMMENT',
            payload: this.state
        })
        this.props.history.push('/review');
    }

    render() {
        return (
            <>
            <h1>Any comments you would like to leave?</h1>

            <form onSubmit={this.handleSubmit}>
                <input placeholder="answer" onChange={(event) => this.handleChangeFor(event)} />
                <button type="submit">Next</button>
            </form>
            <Review/>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comment);