import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { ChevronBackIcon } from 'pearson-mui-theme';


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
  <ChevronBackIcon color="primary" className={classes.root} />
  <ChevronBackIcon color="secondary" className={classes.root}/>
  <ChevronBackIcon color="action" className={classes.root}/>
  <ChevronBackIcon color="disabled" className={classes.root}/>
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
