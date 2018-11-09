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
 * Renders/demos Default Button.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <div className="defaultButtons">
    <Button
      variant="text"
      color="primary"
      size="small"
      className={classes.button}
    >Small Button</Button>

    <Button
      variant="text"
      color="primary"
      size="medium"
      className={classes.button}
    >Medium Button</Button>

    <Button
      variant="text"
      color="primary"
      size="large"
      className={classes.button}
    >Large Button</Button>
  </div>
);


component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
