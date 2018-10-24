import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import Home from '@material-ui/icons/Home';
import Apps from '@material-ui/icons/Apps';
import Tab from '@material-ui/icons/Tab';
import SwapHorizontalCircle from '@material-ui/icons/SwapHorizontalCircle';

import './styles/DrawerComponent.css'

const DrawerComponent = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} >
    <div className="drawer" onClick={onClose}>
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/typography">
          <ListItemIcon>
            <ViewCarousel />
          </ListItemIcon>
          <ListItemText primary="Typography" />
        </ListItem>
        <ListItem component={Link} to="/buttons">
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Buttons" />
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
      </List>
    </div>
  </Drawer>
);

DrawerComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func
};

export default DrawerComponent;
