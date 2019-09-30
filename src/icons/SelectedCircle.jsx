import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  small: {
    width: 19,
    height: 19
  },
  normal: {
    width: 24,
    height: 24
  }
}

const SelectedCircle = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox='0 0 19 19' className={classes[size]} {...other}>
    <circle fill='currentColor' cx='9.5' cy='9.5' r='9.5' />
    <path
      fillRule='nonzero'
      d={`M8.823 13.7a.877.877 0 0 1-1.278.043l-2.281-2.239a.874.874 0 0 1-.011-1.237.877.877 0 0 1 1.24-.01l1.629
        1.598 5.348-5.998a.877.877 0 0 1 1.238-.072.874.874 0 0 1 .072 1.236L8.823 13.7z`}
    />
  </SvgIcon>
)

SelectedCircle.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
}

export default withStyles(styles)(SelectedCircle)
