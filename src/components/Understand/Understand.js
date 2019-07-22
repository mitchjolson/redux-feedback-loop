import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

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
        const { classes } = this.props;
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
                <Button variant="contained" color="primary" className={classes.button} type="submit">Next</Button>
            </form>
            <Review/>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(Understand));