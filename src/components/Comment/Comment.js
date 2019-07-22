import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

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
        const { classes } = this.props;
        return (
            <>
            <h1>Any comments you would like to leave?</h1>

            <form onSubmit={this.handleSubmit}>
                <input placeholder="answer" onChange={(event) => this.handleChangeFor(event)} />
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

export default withStyles(styles)(connect(mapStateToProps)(Comment));