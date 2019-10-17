import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import {withStyles} from '@material-ui/core/styles'

const styles = () => ({
  tabs: {
    backgroundColor: '#002e60',
    borderRight: `1px solid `,
    width: 72,
    minWidth: 64,
    minHeight: 640
  }

})

const CustomVerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none'
  }
}))(Tabs)

const VerticalTabs = ({ classes, children, ...other }) => (
  <CustomVerticalTabs
    orientation='vertical'
    aria-label='Vertical tabs example'
    className={classes.tabs}
    {...other}
  >
    {children}
  </CustomVerticalTabs>
)

VerticalTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node.isRequired), PropTypes.node.isRequired]).isRequired
}

export default withStyles(styles)(VerticalTabs)