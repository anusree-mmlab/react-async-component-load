import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import EnhancedTable from './Table';

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

const Branches = (props) => {
    const { classes } = props;
    return (
        <div>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                   {/*  <Paper className={classes.paper}>
                    <EnhancedTable/>
                    </Paper> */}
                    <EnhancedTable/>
                </Grid>
            </Grid>
        </div>
    )
}

Branches.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default Branches;
export default withStyles(styles)(Branches);