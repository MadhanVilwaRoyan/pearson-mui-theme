import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    width: '90%'
  },
  button: {
    marginRight: 16
  },
  instructions: {
    marginTop: 16,
    marginBottom: 16
  }
})

const HorizontalStepper = ({ classes, children, ...props }) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}
HorizontalStepper.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired

}
export default withStyles(styles)(HorizontalStepper)
