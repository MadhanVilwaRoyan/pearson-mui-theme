import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

/**
 * Renders/demos Tab navigation.
 *
 * @author Hari Gangadharan
 */
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root:theme.overrides.MuiCustomTabs.DarkMode.root,
  tabs:theme.overrides.MuiCustomTabs.DarkMode.tabs
  
});

const CustomTabs = withStyles(theme=>({
  indicator: theme.overrides.MuiCustomTabs.DarkMode.indicator
}))(Tabs);

const CustomTab = withStyles(theme => ({
  root: theme.overrides.MuiCustomTabs.DarkMode.CustomTab
}))(props => <Tab {...props} />);

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className={classes.tabs} position="static">
          <CustomTabs textColor="inherit" centered={true} value={value} onChange={this.handleChange}>
            <CustomTab label="ASSIGNMENTS" />
            <CustomTab label="TABLE OF CONTENTS" />
            <CustomTab label="NOTEBOOK" />
          </CustomTabs>
        </AppBar>
        {value === 0 && <TabContainer>Showing Assignments</TabContainer>}
        {value === 1 && <TabContainer>Showing Table of Contents</TabContainer>}
        {value === 2 && <TabContainer>Showing Notebook </TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
