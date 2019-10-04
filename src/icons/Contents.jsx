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
const ContentsIcon = ({ classes, size = 'normal', enableTabIndex = true, ...other }) => (
  <SvgIcon viewBox='0 0 20 20' tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <path d='M8,6 L21,6 C21.5522847,6 22,6.44771525 22,7 C22,7.55228475 21.5522847,8 21,8 L8,8 C7.44771525,8 7,7.55228475 7,7 C7,6.44771525 7.44771525,6 8,6 Z' fill='currentcolor' />
    <circle id='icon' fill='currentcolor' cx='3.5' cy='7' r='1.5' />
    <path d='M8,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L8,13 C7.44771525,13 7,12.5522847 7,12 C7,11.4477153 7.44771525,11 8,11 Z' fill='currentcolor' />
    <circle id='icon' fill='currentcolor' cx='3.5' cy='12' r='1.5' />
    <path d='M8,16 L21,16 C21.5522847,16 22,16.4477153 22,17 C22,17.5522847 21.5522847,18 21,18 L8,18 C7.44771525,18 7,17.5522847 7,17 C7,16.4477153 7.44771525,16 8,16 Z' fill='currentcolor' />
    <circle fill='currentcolor' cx='3.5' cy='17' r='1.5' />
  </SvgIcon>
)

ContentsIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  enableTabIndex: PropTypes.object.isOptional
}

export default withStyles(styles)(ContentsIcon)
