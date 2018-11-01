import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

const Avatars = ({ classes }) => (
  <div>
    <div className="avatars">
      <Avatar alt="Remy Sharp" src="/images/LeticiaCaceres.jpg" />
      <Avatar
        sizes="large"
        alt="Adelle Charles"
        src="/images/LeticiaCaceres.jpg"
      />
   </div>
  </div>
);

Avatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Avatars);
