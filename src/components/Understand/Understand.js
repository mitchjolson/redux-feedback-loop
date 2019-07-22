import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';


class Understand extends Component {

    state = {
        understand: '',
    };

    handleChangeFor = (event) => {
        this.setState({understand: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.understand){
            alert('Please select a value before continuing.')
        }else{
        this.props.dispatch({
            type: 'UNDERSTAND',
            payload: this.state
        })
        this.props.history.push('/support');
        }
    }

    render() {
        return (
            <>
            <h1>How well do you understand the material??</h1>

            <form onSubmit={this.handleSubmit}>
                <input type="radio" name="understand" value="1" onChange={(event) => this.handleChangeFor(event)}/>1
                <input type="radio" name="understand" value="2" onChange={(event) => this.handleChangeFor(event)}/>2
                <input type="radio" name="understand" value="3" onChange={(event) => this.handleChangeFor(event)}/>3
                <input type="radio" name="understand" value="4" onChange={(event) => this.handleChangeFor(event)}/>4
                <input type="radio" name="understand" value="5" onChange={(event) => this.handleChangeFor(event)}/>5
                <br />
                <br />
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

export default connect(mapStateToProps)(Understand);