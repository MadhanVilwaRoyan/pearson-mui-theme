import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BookmarkoffIcon } from 'pearson-mui-theme';


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
  <BookmarkoffIcon color="action" className={classes.root}/>
  <BookmarkoffIcon color="primary" className={classes.root}/>
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
