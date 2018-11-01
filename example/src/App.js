import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import pearsonTheme from 'pearson-mui-theme';
import DrawerComponent from './common/DrawerComponent';
import SampleRenderer from './common/SampleRenderer';

const styles = {
  pearsonMuiTheme: {
    margin: '30px auto',
    maxWidth: 1024
  }
};

/**
 * The main App Component.
 *
 * @author Hari Gangadharan
 */
class App extends Component {
  constructor(props) {
    super(props);
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
    const { classes } = this.props;
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
            <div className={classes.pearsonMuiTheme}>
              <DrawerComponent onClose={this.handleDrawerClose} open={this.state.drawerOpen} />
              <Route exact path="/" render={() => (<SampleRenderer name="Home" />)} />
              <Route exact path="/buttons" render={() => (<SampleRenderer name="Buttons" />)} />
              <Route exact path="/avatars" render={() => (<SampleRenderer name="Avatars" />)} />
              <Route exact path="/typography" render={() => (<SampleRenderer name="Typography" />)} />
              <Route exact path="/tabs" render={() => (<SampleRenderer name="Tabs" />)} />
              <Route exact path="/sliders" render={() => (<SampleRenderer name="Sliders" />)} />
              <Route exact path="/dialogs" render={() => (<SampleRenderer name="Dialogs" />)} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
