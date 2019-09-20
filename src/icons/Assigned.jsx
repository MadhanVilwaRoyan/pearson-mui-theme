import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import colors from '../colors';
// import { makeStyles } from '@material-ui/core/styles';
const styles = {
  small: {
    width: 8,
    height: 8
  },
  normal: {
    width: 24,
    height: 24
  }
};

const AssignedIcon = ({ classes, size = 'small', ...other }) => (
  <SvgIcon viewBox="0 0 8 8" className={classes[size]} {...other}>
   <circle cx="177" cy="11" r="4" fill="#047B9C" fill-rule="nonzero" transform="translate(-173 -7)"/>  
</SvgIcon>
);

AssignedIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(AssignedIcon);
