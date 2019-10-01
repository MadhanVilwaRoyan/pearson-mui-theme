import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = () => ({
  root: {
    width: 270
  }
});

const MediaCard = (props) => (
  <Card {...props} className={props.classes.root} />
);

export default withStyles(styles)(MediaCard);
