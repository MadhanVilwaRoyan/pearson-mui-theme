import React from 'react'
import CodeRenderer from '../common/CodeRenderer';
import PropTypes from 'prop-types';

const Avatars = () => (
  <div>
    <CodeRenderer name={'avatars/SmallAvatar'} />
    <CodeRenderer name={'avatars/LargeAvatar'} />
  </div>
);

Avatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Avatars;
