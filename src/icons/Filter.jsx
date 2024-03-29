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
}

const FilterIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 16 12' tabIndex='0' className={classes[size]} {...other}>
    <path fill='currentcolor' stroke='#252525' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 11h2M1 1h14M4 6h8' />
  </SvgIcon>
)

FilterIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(FilterIcon)
