import { createMuiTheme } from '@material-ui/core/styles';

const pearsonTheme = {
  spacing: {
    unit: 16,
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application
    }
  },
  palette: {
    primary: {
      main: '#047b9c',
      dark: '#005a70',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffb71c',
      dark: '#ff9b19',
      contrastText: '#252525'
    },
    text: {
      primary: '#252525',
      disabled: '#c7c7c7'
    },
    action: {
      disabled: '#c7c7c7',
      disabledBackground: '#e9e9e9'
    }
  },
  typography: {
    useNextVariants: true,
    color: '#252525',
    fontFamily: [
      'OpenSans',
      'Calibri',
      'Tahoma',
      'sans-serif'
    ],
    fontSize: 14,
    lineHeight: 18
  },
  overrides: {
    MuiPaper: {
      root: {
        fontFamily: [
          'OpenSans',
          'Calibri',
          'Tahoma',
          'sans-serif'
        ],
        fontSize: 14
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#ffffff',
        color: '#252525',
        border: '0 none',
        boxShadow: 'none'
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none'
      },
      selected: {
        fontWeight: 600
      },
      labelContainer: {
        paddingTop: '12px',
        paddingBottom: '6px',
        paddingLeft: '16px',
        paddingRight: '16px'
      }
    },
    MuiTabIndicator: {
      colorSecondary: {
        backgroundColor: '#252525'
      }
    },
    MuiTypography: {
      root: {
      }
    },
    MuiAvatar: {
      root: {
        height: '50px',
        width: '50px'
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      outlined: {
        borderRadius: '36px'
      },
      disabled: {
        backgroundColor: '#e9e9e9',
        border: '0px none'
      },
      contained: {
        padding: '7px 20px',
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 600,
        borderRadius: '36px'
      },
      containedPrimary: {
        color: '#fafafa'
      },
      sizeSmall: {
        padding: '7px 12px',
        borderRadius: '32px'
      },
      sizeLarge: {
        padding: '6px 20px',
        fontSize: '16px',
        lineHeight: '20px',
        borderRadius: '40px',
        fontWeight: 600
      }
    }
  },
  MuiPopover: {
    root: {
      borderRadius: '4px',
      padding: '10px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
      marginTop: '10px'
    },
    paper: {
      padding: '20px',
      maxWidth: '294px'
    }
  },
  MuiSlider: {
    root: {},
    track: {
      backgroundColor: '#d9d9d9',
      height: '4px'
    },
    thumb: {
      backgroundColor: '#22b6b4',
      width: '15px',
      height: '15px'
    }
  }
};

export default createMuiTheme(pearsonTheme)
