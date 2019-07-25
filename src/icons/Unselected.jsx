import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import colors from '../colors';

const styles = {
  small: {
    width: 19,
    height: 19,
    color: colors.mediumGray
  },
  normal: {
    width: 24,
    height: 24,
    color: colors.mediumGray
  }
};

const Unselected = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox="0 0 19 19" className={classes[size]} {...other}>
    <circle stroke="currentColor" strokeWidth="2" cx="9.5" cy="9.5" r="8.5" fill="none" />
  </SvgIcon>
);

Unselected.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(Unselected);
