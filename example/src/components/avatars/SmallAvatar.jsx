import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  smallAvatar: {
    margin: theme.spacing(1),
    width: theme.pearson.avatar.small,
    height: theme.pearson.avatar.small
  }
});

/**
 * Renders/demos Small sized Avatar.
 *
 * @author Hari Gangadharan
 */
const component = ({ classes }) => (
  <div className="largeAvatar">
    <Avatar
      alt="John Fallon"
      src="/images/JohnFallon.png"
      className={classes.smallAvatar}
    />
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
