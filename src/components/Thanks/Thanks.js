import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 24,
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
        return (
            <>
            <h1>Thank You!</h1>
            <Button onClick={this.handleSubmit}>Leave New Feedback</Button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(Thanks));