import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  small: {
    width: 18,
    height: 18,
    tabIndex: 0
  },
  normal: {
    width: 24,
    height: 24,
    tabIndex: 0
  }
}

const ArrowBackIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 18 18' tabIndex='0' className={classes[size]} {...other}>
    <path fill='currentcolor' d='M3.416 8H17a1 1 0 0 1 0 2H3.416l6.29 6.291a1.001 1.001 0 1 1-1.415 1.416L.293 9.709a1.001 1.001 0 0 1 0-1.418L8.291.293A1.001 1.001 0 1 1 9.707 1.71L3.416 8z' />
  </SvgIcon>
)

ArrowBackIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(ArrowBackIcon)
