import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
      },
  });

class Comment extends Component {

    state = {
        comment: '',
    };

    // sets the local state when text is modified in the comment field
    handleChangeFor = (event) => {
        this.setState({comment: event.target.value})
    }

    // on next button click, dispatch local state to reducers with type 'COMMENT'
    // then navigate to /review
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'COMMENT',
            payload: this.state
        })
        this.props.history.push('/review');
    }

    render() {
        const { classes } = this.props;
        return (
            <>
            <h1>Any comments you would like to leave?</h1>

            <form onSubmit={this.handleSubmit}>
                <TextField label="Comments" className={classes.textField} onChange={(event) => this.handleChangeFor(event)}/>
                <Button variant="contained" color="primary" className={classes.button} type="submit">Next</Button>
            </form>
            <Review/>
            </>
        );
    } // end render
} // end class

// connect to redux store
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(Comment));