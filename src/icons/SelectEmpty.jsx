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
    width: 24,
    height: 24
  }
};

const SelectEmptyIcon = ({ classes, size = 'small', ...other }) => (
  <SvgIcon viewBox="0 0 18 18" className={classes[size]} {...other}>
      <circle cx="8" cy="8" r="8" fill="none" fill-rule="evenodd" stroke="#252525" stroke-width="2" transform="translate(1 1)"/>
  </SvgIcon>
);

SelectEmptyIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(SelectEmptyIcon);
