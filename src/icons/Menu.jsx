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
    width: 20,
    height: 18
  }
};

const MenuIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox="0 0 20 18" className={classes[size]} {...other}>
      <path fill="#252525" d="M1 0h18a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zM1 8h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zM1 16h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z"/>
  </SvgIcon>
);

MenuIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(MenuIcon);
