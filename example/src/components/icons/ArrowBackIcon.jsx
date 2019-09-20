import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { ArrowBackIcon } from 'pearson-mui-theme';


const styles = theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing.unit
    }
  }
});

/**
 * Renders/demos Call To Action Button.
 *
 * @author Mithun Adavelly
 */
const component = ({ classes }) => (
  <div>
  <ArrowBackIcon color="primary" className={classes.root} />
  <ArrowBackIcon color="secondary" className={classes.root}/>
  <ArrowBackIcon color="action" className={classes.root}/>
  <ArrowBackIcon color="disabled" className={classes.root}/>
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
