import React from 'react';
import colors from './colors';
import SelectedCircle from './icons/SelectedCircle';
import Unselected from './icons/Unselected';

const pseodoOutline = (padding, borderRadius, focusColor) => {
  return {
    content: '""',
    position: 'absolute',
    top: -(padding * 3),
    left: -(padding * 3),
    borderRadius,
    width: `calc(100% + ${padding * 4}px)`,
    height: `calc(100% + ${padding * 4}px)`,
    border: `2px solid ${focusColor}`
  }
};

const tabPseodoOutline = (borderRadius, focusColor) => {
  return {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius,
    width: `calc(100% - 4px)`,
    height: `calc(100% - 4px)`,
    border: `2px solid ${focusColor}`
  }
};

const icons = {
  checkbox: {
    normal: {
      checked: <SelectedCircle />
    },
    fancy: {
      unchecked: <Unselected size="small" color="primary" />,
      checked: <SelectedCircle size="small" color="primary" />
    }
  }
};

const pearson = {
  font: {
    family: [
      'OpenSans',
      'Calibri',
      'Tahoma',
      'sans-serif'
    ],
    size: {
      normal: 14
    }
  },
  borderRadius: {
    normal: 22,
    large: 32
  },
  lineHeight: {
    xxl: 1.58,
    xl: 1.5,
    l: 1.38,
    m: 1.33,
    s: 1.29,
    xs: 1.25,
    xxs: 1.167
  },
  colors,
  iconSize: {
    normal: 19
  },
  padding: {
    small: 10,
    normal: 16
  },
  avatar: {
    small: 60,
    large: 120
  }
};

const pearsonMuiTheme = {
  pearson,
  spacing: { unit: 16 },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application
      focusVisibleClassName: 'pmuiCustomFocusVisible'
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
      secondary: colors.mediumGray,
      disabled: colors.concrete,
      hint: colors.charcoal
    },
    action: {
      disabled: colors.mediumGray,
      disabledBackground: colors.moonlight
    }
  },
  typography: {
    useNextVariants: true,
    color: colors.charcoal,
    fontFamily: pearson.font.family,
    fontSize: pearson.font.size.normal,
    lineHeight: pearson.lineHeight.l
  },
  mixins: {
  },
  overrides: {
    MuiPaper: {
      root: {
        fontFamily: pearson.font.size.large,
        fontSize: pearson.font.size.large
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: colors.digitalBlue,
        color: colors.white,
        border: '0 none',
        boxShadow: 'none'
      },
      // eslint-disable-next-line no-dupe-keys
      colorDefault: {
        backgroundColor: colors.white,
        color: colors.charcoal,
        border: '0 none',
        boxShadow: 'none'
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        marginRight: 10,
        marginLeft: 10,
        '@media (min-width: 960px)': {
          minWidth: 'inherit'
        },
        '&$selected': {
          fontWeight: 600
        }
      },
      textColorInherit: {
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseodoOutline(6, colors.white)
        }
      },
      textColorPrimary: {
        '&.pmuiCustomFocusVisible': {
          '&:after': tabPseodoOutline(6, colors.focusBlue)
        }
      },
      labelContainer: {
        paddingTop: '12px',
        paddingBottom: '16px',
        paddingLeft: 4,
        paddingRight: 4,
        '@media (min-width: 960px)': {
          padding: 'inherit'
        }
      },
      wrapper: {
        paddingLeft: 4,
        paddingRight: 4
      }
    },
    MuiPrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: colors.digitalMarineTurquoise,
        height: 3,
        marginBottom: 8
      }
    },
    MuiTypography: {
      colorSecondary: {
        color: colors.mediumGray
      },
      root: {
        lineHeight: pearson.lineHeight.l,
        color: colors.charcoal,
        fontSize: 16
      },
      h1: {
        fontSize: 24
      },
      h2: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: pearson.lineHeight.m
      },
      h3: {
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '0.15px',
        lineHeight: pearson.lineHeight.m
      },
      h4: {
        fontSize: 16,
        letterSpacing: 'normal',
        lineHeight: pearson.lineHeight.xl
      },
      h5: {
        fontSize: 15,
        letterSpacing: 0.3,
        lineHeight: pearson.lineHeight.m,
        color: colors.mediumGray
      },
      h6: {
        fontSize: 24,
        lineHeight: pearson.lineHeight.xxs,
        color: colors.charcoal
      },
      subtitle1: {
        fontSize: 14,
        letterSpacing: 0.15,
        lineHeight: 'normal'
      },
      subtitle2: {
        fontSize: 12,
        fontWeight: 600,
        color: colors.mediumGray,
        letterSpacing: -0.3,
        lineHeight: pearson.lineHeight.xl
      },
      body1: {
        fontSize: 16,
        color: colors.mediumGray,
        lineHeight: pearson.lineHeight.xs
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
    MuiButtonBase: {
      root: {
        border: `2px solid ${colors.transparent}`,
        '&$focusVisible': {
          '&:after': pseodoOutline(2, 36, colors.focusBlue)
        }
      }
    },
    MuiButton: {
      root: {
        fontSize: 16,
        lineHeight: 1.25,
        textTransform: 'none',
        '&$disabled': {
          backgroundColor: colors.moonlight
        }
      },
      label: {
        minWidth: 104
      },
      text: {
        borderRadius: pearson.borderRadius.normal,
        backgroundColor: colors.alto
      },
      outlined: {
        boxShadow: '0 5px 22px 4px rgba(0, 0, 0, 0.03), 0 7px 8px -4px rgba(0, 0, 0, 0.05)',
        borderColor: colors.mediumGray,
        color: colors.mediumGray,
        backgroundColor: 'transparent',
        borderRadius: pearson.borderRadius.normal,
        '&:hover': {
          color: colors.charcoal,
          backgroundColor: 'transparent',
          borderColor: colors.charcoal
        },
        '&$disabled': {
          border: '1px solid',
          borderColor: colors.moonlight
        }
      },
      textPrimary: {
        color: colors.whiteGray,
        backgroundColor: colors.strawberryRed,
        '&:hover': {
          color: colors.white,
          backgroundColor: colors.strawberryRed
        }
      },
      outlinedPrimary: {
        padding: '7px 24px',
        color: colors.white,
        backgroundColor: colors.digitalBlue,
        borderColor: colors.digitalBlue,
        '&:hover': {
          color: colors.white,
          borderColor: colors.inkBlue,
          backgroundColor: colors.inkBlue
        }
      },
      outlinedSecondary: {
        color: colors.charcoal,
        backgroundColor: colors.sunshineYellow,
        borderColor: colors.sunshineYellow,
        '&:hover': {
          backgroundColor: colors.sunflowerYellow
        }
      },
      contained: {
        padding: '7px 20px',
        fontSize: 14,
        lineHeight: '18px',
        fontWeight: 600,
        borderRadius: pearson.borderRadius.normal
      },
      containedPrimary: {
        color: colors.whiteGray
      },
      sizeSmall: {
        padding: '5px 24px',
        fontSize: '0.875rem',
        '& span': {
          minWidth: 80
        }
      },
      sizeLarge: {
        padding: '9px 24px',
        fontSize: '16px',
        lineHeight: '20px',
        borderRadius: pearson.borderRadius.large,
        fontWeight: 600
      }
    },
    MuiCardActions: {
      root: {
        '@media (min-width:600px)': {
          paddingLeft: 8,
          paddingTop: 12
        }
      }
    },
    MuiCardContent: {
      root: {
        paddingTop: 0,
        paddingBottom: pearson.padding.normal,
        paddingLeft: pearson.padding.normal,
        paddingRight: pearson.padding.normal,
        '@media (min-width:600px)': {
          paddingLeft: pearson.padding.normal,
          paddingRight: pearson.padding.small
        }
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: colors.alto,
        marginTop: pearson.padding.normal,
        marginBottom: pearson.padding.normal
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
    MuiSvgIcon: {
      colorPrimary: {
        fill: colors.whiteGray
      },
      colorSecondary: {
        fill: colors.charcoal
      }
    },
    MuiDialogActions: {
      root: {
        margin: 24
      }
    },
    MuiIconButton: {
      root: {
        padding: 5
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
    MuiFormControl: {
    },
    MuiUnderline: {
      root: {
        '&:after': {
          borderBottomWidth: 4
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

export default pearsonMuiTheme;

export { default as SelectedCircle } from './icons/SelectedCircle';
export { default as CardList } from './components/CardList';
export { icons };
