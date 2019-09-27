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
    width: 23,
    height: 12
  }
}

const SearchIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 23 22' tabIndex='0' className={classes[size]} {...other}>
    <path fill='currentcolor' d='M17.656 15.409l4.986 4.747a.992.992 0 0 1 0 1.452c-.42.401-1.103.401-1.525 0l-4.986-4.747a10.167 10.167 0 0 1-6.194 2.073c-5.465 0-9.895-4.218-9.895-9.422C.042 4.31 4.472.091 9.938.091c5.465 0 9.895 4.218 9.895 9.421 0 2.232-.815 4.283-2.177 5.897zm-7.718 1.442c4.257 0 7.708-3.285 7.708-7.339 0-4.053-3.451-7.338-7.709-7.338-4.257 0-7.708 3.285-7.708 7.338 0 4.054 3.451 7.34 7.708 7.34z' />
  </SvgIcon>
)

SearchIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(SearchIcon)
