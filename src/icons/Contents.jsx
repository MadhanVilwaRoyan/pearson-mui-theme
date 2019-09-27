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

const ContentsIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 20 14' tabIndex='0' className={classes[size]} {...other}>
    <path fill='currentcolor' d='M8 6h13a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z' />
    <circle cx='3.5' cy='7' r='1.5' fill='currentcolor' />
    <path fill='currentcolor' d='M8 11h13a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z' />
    <circle cx='3.5' cy='12' r='1.5' fill='currentcolor' />
    <path fill='currentcolor' d='M8 16h13a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z' />
    <circle cx='3.5' cy='17' r='1.5' fill='currentcolor' />
  </SvgIcon>
)

ContentsIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(ContentsIcon)
