import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import colors from '../colors';
// import { makeStyles } from '@material-ui/core/styles';
const styles = {
  small: {
    width: 18,
    height: 18
  },
  normal: {
    width: 24,
    height: 24
  }
};

const NoteBookIcon = ({ classes, size = 'normal', ...other }) => (
  <SvgIcon viewBox="0 0 22 22" className={classes[size]} {...other}>
    <path fill="currentcolor" d="M18 1h1.5A2.5 2.5 0 0 1 22 3.5v10.672a2 2 0 0 1-.586 1.414l-5.828 5.828a2 2 0 0 1-1.414.586H2.5A2.5 2.5 0 0 1 0 19.5v-16A2.5 2.5 0 0 1 2.5 1H4a1 1 0 1 1 2 0h2a1 1 0 1 1 2 0h2a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0zm2 13V3.5a.5.5 0 0 0-.5-.5H18v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3h-2v1a1 1 0 0 1-2 0V3H6v1a1 1 0 1 1-2 0V3H2.5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5H14v-3.5a2.5 2.5 0 0 1 2.5-2.5H20z"/>
</SvgIcon>
);

NoteBookIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(NoteBookIcon);
