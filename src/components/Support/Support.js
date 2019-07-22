import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';


class Support extends Component {

    state = {
        support: '',
    };

    handleChangeFor = (event) => {
        this.setState({support: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.support){
            alert('Please select a value before continuing.')
        }else{
        this.props.dispatch({
            type: 'SUPPORT',
            payload: this.state
        })
        this.props.history.push('/comment');
        }
    }

    render() {
        return (
            <>
            <h1>How well are you being supported?</h1>

            <form onSubmit={this.handleSubmit}>
                <input type="radio" name="support" value="1" onChange={(event) => this.handleChangeFor(event)}/>1
                <input type="radio" name="support" value="2" onChange={(event) => this.handleChangeFor(event)}/>2
                <input type="radio" name="support" value="3" onChange={(event) => this.handleChangeFor(event)}/>3
                <input type="radio" name="support" value="4" onChange={(event) => this.handleChangeFor(event)}/>4
                <input type="radio" name="support" value="5" onChange={(event) => this.handleChangeFor(event)}/>5
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

export default connect(mapStateToProps)(Support);