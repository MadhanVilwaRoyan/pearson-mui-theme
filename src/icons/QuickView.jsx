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
    width: 29,
    height: 29
  }
};

const QuickViewIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox="0 0 27 19" className={classes[size]} {...other}>
        <path stroke-width="2" d="M14.351 1.528a1 1 0 0 0-.998-.004l-11.035 6.3a1 1 0 0 0-.006 1.734l11.177 6.488a1 1 0 0 0 .998.004l11.035-6.3a1 1 0 0 0 .007-1.733L14.35 1.527z"/>
        <path stroke-linecap="round" d="M13.5 5.5l-5 3M16.5 7.5l-5 3"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 11l12 7 12-7"/>
</SvgIcon>
);

QuickViewIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(QuickViewIcon);
