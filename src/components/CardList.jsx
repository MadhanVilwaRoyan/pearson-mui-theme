import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 1138,
    margin: '0 auto'
  },
  '@media (max-width: 1176px)': {
    root: {
      maxWidth: 750
    }
  },
  '@media (max-width: 790px)': {
    root: {
      width: 362
    }
  },
  '@media (max-width: 394px)': {
    root: {
      width: 362,
      marginLeft: 16,
      marginRight: 16
    }
  }
});

const CardList = ({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
);

CardList.propTypes = {
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node.isRequired), PropTypes.node.isRequired]).isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardList);
