import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 1098,
    margin: '0 auto'
  },
  '@media (max-width: 1129px)': {
    root: {
      width: 724
    }
  },
  '@media (max-width: 749px)': {
    root: {
      width: 370
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
