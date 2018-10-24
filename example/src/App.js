import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import pearsonTheme from 'pearson-mui-theme'
import DrawerComponent from './common/DrawerComponent'
import SampleRenderer from './common/SampleRenderer'
import Home from './pages/Home'
import Avatars from './pages/Avtars'
import Buttons from './pages/Buttons'
import Typography from './pages/Typography'
import Tabs from './pages/Tabs'
import Sliders from './pages/Sliders'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  };

  handleMenuClick = () => {
    this.setState({ drawerOpen: true })
  };

  render () {
    return (
      <div>
        <MuiThemeProvider theme={pearsonTheme}>
          <AppBar color="primary" position="static" >
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={this.handleMenuClick}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <BrowserRouter>
            <div className="monet">
              <DrawerComponent onClose={this.handleDrawerClose} open={this.state.drawerOpen} />
              <Route exact path="/" render={() => (<SampleRenderer component={(<Home />)} />)} />
              <Route exact path="/buttons" render={() => (<SampleRenderer component={(<Buttons />)} />)} />
              <Route exact path="/avatars" render={() => (<Avatars />)} />
              <Route exact path="/typography" render={() => (<Typography />)} />
              <Route exact path="/tabs" render={() => (<SampleRenderer component={(<Tabs />)} />)} />
              <Route exact path="/sliders" render={() => (<SampleRenderer component={(<Sliders />)} />)} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    )
  }
}
