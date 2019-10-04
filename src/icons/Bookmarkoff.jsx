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

const BookmarkoffIcon = ({ classes, size = 'normal', enableTabIndex = true, ...other }) => (
  <SvgIcon viewBox='0 0 16 23' tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <path fill='currentcolor' fillRule='nonzero' d='M14 2H2v17.244l6-5.355 6 5.355V2zM8 16.57l-6.334 5.653A1 1 0 0 1 0 21.477V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v19.477a1 1 0 0 1-1.666.746L8 16.57z' />
  </SvgIcon>
)

BookmarkoffIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  enableTabIndex: PropTypes.object.isOptional
}

export default withStyles(styles)(BookmarkoffIcon)
