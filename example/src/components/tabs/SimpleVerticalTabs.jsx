import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {ArrowBackIcon, NoteBookIcon, AssignmentIcon, BookmarkoffIcon} from 'pearson-mui-theme';


function TabContainer(props) {
  const {children, value, index, ...other} = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      id={`vertical-TabContainer-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-TabContainer-${index}`,
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    minHeight: 224,
    height: '100%',
    padding: '20px',
    backgroundColor: '#f5f5f5'
  },
  tabs: {
    backgroundColor: '#002e60',
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 72,
    minWidth: 64,
    minHeight: 450
  },
  activeTab:{
    opacity: 0.8,
    backgroundColor:"#005d83"
  },
  tab: {
    color: '#ffffff',
    margin: 1,
    height: 60,
    fontSize: 10,
    minHeight: 60,
    opacity:1,
    '&:hover': {
      opacity: 0.8,
      backgroundColor:"#005d83"
    },
    '&:active': {
      opacity: 0.8,
      backgroundColor:"#005d83"
    },
    '&:visited': {
      opacity: 0.8,
      backgroundColor:"#005d83"
    }
  },
  tabContent: {
    width: '100%',
    paddingLeft: '10px'
  }
});
const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

class SimpleVerticalTabs extends React.Component {

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <div className={classes.root}>
        <VerticalTabs
          orientation="vertical"
          value={value}
          onChange={this.handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Back" {...a11yProps(0)} icon={<ArrowBackIcon enableTabIndex={false}/>} className={`${classes.tab} ${value===0?classes.activeTab:''}`}
/>
          <Tab label="Assignment" {...a11yProps(3)} icon={<AssignmentIcon enableTabIndex={false}/>} className={`${classes.tab} ${value===1?classes.activeTab:''}`}/>
          <Tab label="Notes" {...a11yProps(3)} icon={<NoteBookIcon enableTabIndex={false}/>} className={`${classes.tab} ${value===2?classes.activeTab:''}`}/>
         <Tab label="Bookmarks" {...a11yProps(2)} icon={<BookmarkoffIcon enableTabIndex={false}/>} className={`${classes.tab} ${value===3?classes.activeTab:''}`}/>
        </VerticalTabs>
        {value === 0 &&
        <TabContainer value={value} index={0} className={classes.tabContent}> Showing Back tab </TabContainer>}
        {value === 1 &&
        <TabContainer value={value} index={1} className={classes.tabContent}> Showing Assinment tab </TabContainer>}
        {value === 2 &&
        <TabContainer value={value} index={2} className={classes.tabContent}> Showing Notes tab </TabContainer>}
        {value === 3 &&
        <TabContainer value={value} index={4} className={classes.tabContent}> Showing Bookmarks tab </TabContainer>}
      </div>
    );
  }
}

SimpleVerticalTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleVerticalTabs);
