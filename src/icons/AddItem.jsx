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

const AddItemIcon = ({ classes, size = 'small', ...other }) => (
  <SvgIcon viewBox="0 0 18 18" className={classes[size]} {...other}>
    <path d="M9,16.25 C13.0040644,16.25 16.25,13.0040644 16.25,9 C16.25,4.99593556 13.0040644,1.75 9,1.75 C4.99593556,1.75 1.75,4.99593556 1.75,9 C1.75,13.0040644 4.99593556,16.25 9,16.25 Z M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z" fill="currentcolor" fill-rule="nonzero"></path>
    <path d="M10,8 L12,8 C12.5522847,8 13,8.44771525 13,9 C13,9.55228475 12.5522847,10 12,10 L10,10 L10,12 C10,12.5522847 9.55228475,13 9,13 C8.44771525,13 8,12.5522847 8,12 L8,10 L6,10 C5.44771525,10 5,9.55228475 5,9 C5,8.44771525 5.44771525,8 6,8 L8,8 L8,6 C8,5.44771525 8.44771525,5 9,5 C9.55228475,5 10,5.44771525 10,6 L10,8 Z" fill="currentcolor"></path>
  </SvgIcon>
);

AddItemIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(AddItemIcon);
