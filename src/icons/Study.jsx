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

const StudyIcon = ({ classes, size = 'normal', enableTabIndex = true, ...other }) => (
  <SvgIcon viewBox='0 0 22 22' tabIndex={enableTabIndex ? '0' : null} className={classes[size]} {...other}>
    <path fill='currentcolor' fillRule='nonzero' d='M20.597 7.698A3.495 3.495 0 0 1 22 10.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 18.5v-2.887a3.487 3.487 0 0 1-.557-1.369L.053 6.366a3.5 3.5 0 0 1 2.84-4.055L15.695.054a3.5 3.5 0 0 1 4.055 2.839l.847 4.805zM18.443 7l-.663-3.76a1.5 1.5 0 0 0-1.737-1.217L3.24 4.281a1.5 1.5 0 0 0-1.217 1.737l.474 2.684A3.498 3.498 0 0 1 5.5 7h12.943zM5.5 9A1.5 1.5 0 0 0 4 10.5v8A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 18.5 9h-13z' />
    <path fill='currentcolor' d='M8 12h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zM8 15h6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z' />
  </SvgIcon>
)

StudyIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  enableTabIndex: PropTypes.bool
}

export default withStyles(styles)(StudyIcon)
