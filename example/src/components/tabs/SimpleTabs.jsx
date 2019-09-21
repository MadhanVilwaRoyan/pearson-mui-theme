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
    padding: '10px'
  },
});

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
        <AppBar color="default" position="static">
          <Tabs textColor="primary" centered={true} value={value} onChange={this.handleChange}>
            <Tab label="Assignments" />
            <Tab label="Table of Contents" />
            <Tab label="Notebook" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Showing Assignments</TabContainer>}
        {value === 1 && <TabContainer>Showing Table of Contents</TabContainer>}
        {value === 2 && <TabContainer>Notebook should be here!</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
