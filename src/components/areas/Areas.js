import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const Areas = (props) => {
    const { classes } = props;
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Areas Details Areas Details Areas Details Areas Details Areas Details Areas Details</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

Areas.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default Areas;
export default withStyles(styles)(Areas);