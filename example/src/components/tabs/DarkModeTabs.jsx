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
  root: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: '10px',
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal'
  },
  tabs:{
    backgroundColor: '#002e60',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '1.29',
    color: '#ffffff',
  },
  
});

const CustomTabs = withStyles({
  indicator: {
    height: 3,
    borderRadius: 2,
    backgroundColor: '#ffffff'
  },
})(Tabs);

const CustomTab = withStyles(theme => ({
  root: {
    border:0,
    fontSize: '14px',
    lineHeight: '1.29',
  },
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
