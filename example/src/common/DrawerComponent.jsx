import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import Home from '@material-ui/icons/Home';
import Apps from '@material-ui/icons/Apps';
import Tab from '@material-ui/icons/Tab';
import SwapHorizontalCircle from '@material-ui/icons/SwapHorizontalCircle';
import SelectAllRounded from '@material-ui/icons/Adjust';
import WebAsset from '@material-ui/icons/WebAsset';

const styles = {
  drawer: {
    minWidth: 260
  }
};

/**
 * Drawer component for menu.
 *
 * @author Hari Gangadharan
 */
const DrawerComponent = ({ classes, open, onClose }) => (
  <Drawer open={open} onClose={onClose} >
    <div className={classes.drawer} onClick={onClose}>
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/avatars">
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Avatars" />
        </ListItem>
        <ListItem component={Link} to="/buttons">
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Buttons" />
        </ListItem>
        <ListItem component={Link} to="/inputs">
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Inputs" />
        </ListItem>
        <ListItem component={Link} to="/selections">
          <ListItemIcon>
            <SelectAllRounded />
          </ListItemIcon>
          <ListItemText primary="Selection Controls" />
        </ListItem>
        <ListItem component={Link} to="/tabs">
          <ListItemIcon>
            <Tab />
          </ListItemIcon>
          <ListItemText primary="Tabs" />
        </ListItem>
        <ListItem component={Link} to="/sliders">
          <ListItemIcon>
            <SwapHorizontalCircle />
          </ListItemIcon>
          <ListItemText primary="Sliders" />
        </ListItem>
        <ListItem component={Link} to="/dialogs">
          <ListItemIcon>
            <WebAsset />
          </ListItemIcon>
          <ListItemText primary="Dialogs" />
        </ListItem>
        <ListItem component={Link} to="/typography">
          <ListItemIcon>
            <ViewCarousel />
          </ListItemIcon>
          <ListItemText primary="Typography" />
        </ListItem>
        <ListItem component={Link} to="/icons">
          <ListItemIcon>
          <Apps />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </ListItem>
      </List>
    </div>
  </Drawer>
);

DrawerComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export default withStyles(styles)(DrawerComponent);
