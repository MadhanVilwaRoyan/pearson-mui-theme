import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

/**
 * Renders/demos Call To Action Button.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <div className="ctaButtons">
    <Button
      variant="contained"
      color="secondary"
      size="small"
      className={classes.button}
    >Small Button</Button>

    <Button
      variant="contained"
      color="secondary"
      size="medium"
      className={classes.button}
    >Medium Button</Button>

    <Button
      variant="contained"
      color="secondary"
      size="large"
      className={classes.button}
    >Large Button</Button>
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
