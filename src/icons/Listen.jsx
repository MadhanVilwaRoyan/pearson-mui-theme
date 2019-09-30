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

const ListenIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 24 22' tabIndex='0' className={classes[size]} {...other}>
    <path fill='currentcolor' d='M21 10.685c1.786.966 3 2.856 3 5.03v.57A5.714 5.714 0 0 1 18.286 22H18a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h.286c.242 0 .48.015.714.044V8a6 6 0 0 0-6-6h-2a6 6 0 0 0-6 6v2.044A5.77 5.77 0 0 1 5.714 10H6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-.286A5.714 5.714 0 0 1 0 16.286v-.572a5.713 5.713 0 0 1 3-5.03V8a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8v2.685zM18.286 12H18v8h.286A3.714 3.714 0 0 0 22 16.286v-.572A3.714 3.714 0 0 0 18.286 12zM5.714 12A3.714 3.714 0 0 0 2 15.714v.572A3.714 3.714 0 0 0 5.714 20H6v-8h-.286z' />
  </SvgIcon>
)

ListenIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(ListenIcon)
