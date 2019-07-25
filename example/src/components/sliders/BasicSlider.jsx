import React, { Component } from 'react';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  slider: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

/**
 * Renders/demos Basic Slider.
 *
 * @author Hari Gangadharan
 */
class BasicSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.5
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <div>Value: {value}</div>
        <Slider
          className={this.props.classes.slider}
          value={value}
          min={0}
          max={1}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

BasicSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicSlider);
