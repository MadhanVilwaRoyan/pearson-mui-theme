import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import colors from '../colors';
// import { makeStyles } from '@material-ui/core/styles';
const styles = {
  small: {
    width: 18,
    height: 18
  },
  normal: {
    width: 24,
    height: 24
  }
};

const ArrowBackIcon = ({ classes, size = 'small', ...other }) => (
  <SvgIcon viewBox="0 0 18 18" className={classes[size]} {...other}>
    <path d="M6.41421356,8 L14,8 C14.5522847,8 15,8.44771525 15,9 C15,9.55228475 14.5522847,10 14,10 L6.41421356,10 L9.70710678,13.2928932 C10.0976311,13.6834175 10.0976311,14.3165825 9.70710678,14.7071068 C9.31658249,15.0976311 8.68341751,15.0976311 8.29289322,14.7071068 L3.29289322,9.70710678 C2.90236893,9.31658249 2.90236893,8.68341751 3.29289322,8.29289322 L8.29289322,3.29289322 C8.68341751,2.90236893 9.31658249,2.90236893 9.70710678,3.29289322 C10.0976311,3.68341751 10.0976311,4.31658249 9.70710678,4.70710678 L6.41421356,8 Z"  fill="currentcolor"></path>  
</SvgIcon>
);

ArrowBackIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(ArrowBackIcon);
