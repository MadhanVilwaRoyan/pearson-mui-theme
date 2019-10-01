import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {ArrowBackIcon, ContentsIcon, NoteBookIcon, StudyIcon, ResourcesIcon, BookmarkoffIcon} from 'pearson-mui-theme';

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
    backgroundColor: '#005d83',
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 72,
    minWidth: 64,
    minHeight: 450
  },
  tab: {
    color: '#ffffff',
    margin: 1,
    height: 60,
    fontSize: 11,
    minHeight: 60,
    '&:hover': {
      backgroundColor: 'rgba(250, 250, 250, 0.6)',
      opacity: 0.3
    },
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
          <Tab label="Back" {...a11yProps(0)} icon={<ArrowBackIcon/>} className={classes.tab}/>
          <Tab label="Contents" {...a11yProps(1)} icon={<ContentsIcon/>} className={classes.tab}/>
          <Tab label="History" {...a11yProps(2)} icon={<BookmarkoffIcon/>} className={classes.tab}/>
          <Tab label="NoteBook" {...a11yProps(3)} icon={<NoteBookIcon/>} className={classes.tab}/>
          <Tab label="Study" {...a11yProps(4)} icon={<StudyIcon/>} className={classes.tab}/>
          <Tab label="Resources" {...a11yProps(5)} icon={<ResourcesIcon/>} className={classes.tab}/>
        </VerticalTabs>
        {value === 0 &&
        <TabContainer value={value} index={0} className={classes.tabContent}> Showing Back tab </TabContainer>}
        {value === 1 &&
        <TabContainer value={value} index={1} className={classes.tabContent}> Showing contents tab </TabContainer>}
        {value === 2 &&
        <TabContainer value={value} index={2} className={classes.tabContent}> Showing History tab </TabContainer>}
        {value === 3 &&
        <TabContainer value={value} index={3} className={classes.tabContent}> Showing NoteBook tab </TabContainer>}
        {value === 4 &&
        <TabContainer value={value} index={4} className={classes.tabContent}> Showing Study tab </TabContainer>}
        {value === 5 &&
        <TabContainer value={value} index={5} className={classes.tabContent}> Showing Resources tab </TabContainer>}
      </div>
    );
  }
}

SimpleVerticalTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleVerticalTabs);
