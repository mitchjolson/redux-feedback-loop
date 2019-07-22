import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

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
        const { classes } = this.props;
        return (
            <>
            <h1>How are you feeling today?</h1>

            <FormControl component="fieldset">
            <RadioGroup aria-label="position" name="position" row onChange={(event) => this.handleChangeFor(event)}>
                <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="1"
                labelPlacement="top"
                />
                <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="2"
                labelPlacement="top"
                />
                <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="3"
                labelPlacement="top"
                />
                <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="4"
                labelPlacement="top"
                />
                <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="5"
                labelPlacement="top"
                />
            </RadioGroup>
            <Button fullWidth variant="contained" color="primary" className={classes.button} type="submit" onClick={this.handleSubmit}>Next</Button>
            </FormControl>

            <Review/>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(Feel));