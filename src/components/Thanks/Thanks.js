import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

class Thanks extends Component {

    handleSubmit = (event) => {
        this.props.dispatch({
            type: 'RESET',
            payload: {},
        })
        this.props.history.push('/');
    }

    render() {
        const { classes } = this.props;
        return (
            <>
            <h1>Thank You!</h1>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>Leave New Feedback</Button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(Thanks));