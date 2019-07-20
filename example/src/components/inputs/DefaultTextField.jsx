import React from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

/**
 * Renders/demos Default Button.
 *
 * @author Hari Gangadharan
 */
const component = () => (
  <div className="defaultInput">
    <TextField
      id="standard-search"
      label="Search field"
      type="search"
      margin="normal"
    />
    <TextField
      id="standard-search"
      label="Search field"
      fullWidth={true}
      placeholder="Example: Elephants in Africa"
      type="text"
      margin="normal"
    />
  </div>
);


component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default component;
