import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  alto: '#d9d9d9',
  digitalBlue: '#047b9c',
  digitalMarineTurquoise: '#19a5a3',
  charcoal: '#252525',
  concrete: '#c7c7c7',
  inkBlue: '#005a70',
  moonlight: '#e9e9e9',
  sunshineYellow: '#ffb71c',
  sunflowerYellow: '#ff9b19',
  whiteGray: '#f5f5f5',
  white: '#ffffff'
};

const pearson = {
  colors,
  selections: {
    radio: {
    }
  },
  avatar: {
    small: 60,
    large: 120
  }
};

const pearsonMuiTheme = {
  pearson,
  spacing: {
    unit: 18
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
      main: colors.digitalBlue,
      dark: colors.inkBlue,
      contrastText: colors.white
    },
    secondary: {
      main: colors.sunshineYellow,
      dark: colors.sunflowerYellow,
      contrastText: colors.charcoal
    },
    text: {
      primary: colors.charcoal,
      secondary: colors.charcoal,
      disabled: colors.concrete,
      hint: colors.charcoal
    },
    action: {
      disabled: colors.concrete,
      disabledBackground: colors.moonlight
    }
  },
  typography: {
    useNextVariants: true,
    color: colors.charcoal,
    fontFamily: [
      'OpenSans',
      'Calibri',
      'Tahoma',
      'sans-serif'
    ],
    fontSize: 14,
    lineHeight: 1.38
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
        backgroundColor: colors.white,
        color: colors.charcoal,
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
    MuiPrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: colors.charcoal
      }
    },
    MuiTypography: {
      root: {
        lineHeight: 1.38,
        fontSize: 16
      },
      body1: {
        fontSize: 16
      },
      body2: {
        fontSize: 16
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
        backgroundColor: colors.moonlight,
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
        color: colors.whiteGray
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
    },
    MuiPopover: {
      root: {
        borderRadius: '4px',
        padding: '24px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
        marginTop: '10px'
      },
      paper: {
        padding: '24px',
        maxWidth: '294px'
      }
    },
    MuiSlider: {
      root: {},
      track: {
        backgroundColor: colors.alto,
        height: '4px'
      },
      thumb: {
        backgroundColor: colors.digitalMarineTurquoise,
        width: '15px',
        height: '15px'
      }
    },
    MuiDialogActions: {
      root: {
        margin: 24
      }
    },
    MuiRadio: {
      root: {
        paddingTop: 2,
        '&$checked': {
          '& + span': {
            fontWeight: 700,
            color: colors.digitalBlue
          }
        }
      }
    },
    MuiFormLabel: {
      root: {
        lineHeight: 1.38,
        '&$focused': {
          color: colors.charcoal
        }
      }
    },
    MuiFormControlLabel: {
      root: {
        alignItems: 'flex-start',
        paddingTop: 30
      }
    }
  }
};

export default createMuiTheme(pearsonMuiTheme);
