import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';


class Feel extends Component {

    state = {
        feel: '',
    };

    handleChangeFor = (event) => {
        this.setState({feel: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.feel){
            alert('Please select a value before continuing.')
        }else{
        this.props.dispatch({
            type: 'FEEL',
            payload: this.state
        })
        this.props.history.push('/understand');
    }
    }

    render() {
        return (
            <>
            <h1>How are you feeling today?</h1>

            <form onSubmit={this.handleSubmit}>
                <input type="radio" name="feel" value="1" onChange={(event) => this.handleChangeFor(event)}/>1
                <input type="radio" name="feel" value="2" onChange={(event) => this.handleChangeFor(event)}/>2
                <input type="radio" name="feel" value="3" onChange={(event) => this.handleChangeFor(event)}/>3
                <input type="radio" name="feel" value="4" onChange={(event) => this.handleChangeFor(event)}/>4
                <input type="radio" name="feel" value="5" onChange={(event) => this.handleChangeFor(event)}/>5
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

export default connect(mapStateToProps)(Feel);