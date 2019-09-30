import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AddItemIcon } from 'pearson-mui-theme';


const styles = theme => ({
  root: {
      margin: theme.spacing.unit
  }
});

/**
 * Renders/demos Call To Action Button.
 *
 * @author Mithun Adavelly
 */
const component = ({ classes }) => (
  <div>
  <AddItemIcon color="primary" className={classes.root} />
  <AddItemIcon color="secondary" className={classes.root} />
  <AddItemIcon color="action" className={classes.root} />
  <AddItemIcon color="disabled" className={classes.root} />
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
