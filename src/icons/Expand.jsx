import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  small: {
    width: 18,
    height: 18
  },
  normal: {
    width: 19,
    height: 18
  }
};

const ExpandIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox="0 0 19 18" className={classes[size]} {...other}>
    <path d="M2.497 15.061l4.578-4.577a.833.833 0 1 1 1.178 1.178L3.676 16.24l4.02.005c.427 0 .773.347.773.773a.77.77 0 0 1-.77.772l-5.97-.008a.775.775 0 0 1-.774-.773l-.008-5.97a.77.77 0 0 1 .772-.771c.426 0 .772.346.773.773l.005 4.02zM16.938 2.978L12.36 7.555a.833.833 0 1 1-1.178-1.179L15.759 1.8l-4.02-.005a.775.775 0 0 1-.773-.773.77.77 0 0 1 .771-.772l5.97.008c.426 0 .772.347.773.773L18.488 7a.77.77 0 0 1-.772.771.775.775 0 0 1-.773-.773l-.005-4.02z"/>
  </SvgIcon>
);

ExpandIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(ExpandIcon);
