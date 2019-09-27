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

const BookmarkonIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 24 24' tabIndex='0'className={classes[size]} {...other}>
    <path d='M11.9999999,17.0933232 L5.66583691,22.7460971 C5.25377873,23.1138287 4.62163425,23.0778949 4.25390268,22.6658367 C4.09037716,22.4825997 4,22.2455937 4,21.9999998 L4,3 C4,1.8954305 4.8954305,1 6,1 L18,1 C19.1045695,1 20,1.8954305 20,3 L20,22 C20,22.5522847 19.5522847,23 19,23 C18.754406,23 18.5174001,22.9096228 18.3341631,22.7460973 L11.9999999,17.0933232 Z' id='Path' fill='#6A7070' />
  </SvgIcon>
)

BookmarkonIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(BookmarkonIcon)
