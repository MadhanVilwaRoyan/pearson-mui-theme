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

const RemoveIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 18 18' tabIndex='0' className={classes[size]} {...other}>
    <path fill='currentcolor' d='M9 7.182L15.805.377a1.286 1.286 0 0 1 1.818 1.818L10.818 9l6.805 6.805a1.286 1.286 0 1 1-1.818 1.818L9 10.818l-6.805 6.805a1.286 1.286 0 1 1-1.818-1.818L7.182 9 .377 2.195A1.286 1.286 0 1 1 2.195.377L9 7.182z' />
  </SvgIcon>
)

RemoveIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(RemoveIcon)
