import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MarkdownContainer from './MarkdownContainer';
import ComponentLoader from './ComponentLoader';
const styles = theme => {
  return ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: `${theme.spacing(1)}px auto`,
    maxWidth: 620,
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(1)
    }
  },
  '@media (max-width: 740px)': {
    root: {
      margin: theme.spacing(1)
    }
  },
})
};

/**
 * A Component that can render the provided sample code. It also use the MarkdownContainer to load the
 * documentation associated with this sample code.
 *
 * @author Hari Gangadharan
 */
const SampleRenderer = ({ classes, name }) => (
  <div>
    <Paper className={classes.root} elevation={1}>
      <MarkdownContainer name={name} />
    </Paper>
    <ComponentLoader name={name} />
  </div>
);

SampleRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(SampleRenderer)
