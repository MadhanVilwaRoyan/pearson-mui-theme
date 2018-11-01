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
 * Renders/demos Slider with step control.
 *
 * @author Hari Gangadharan
 */
class StepSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
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
          max={6}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);
