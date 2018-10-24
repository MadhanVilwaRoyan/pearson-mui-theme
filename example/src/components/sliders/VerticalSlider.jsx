import React, { Component } from 'react';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    display: 'flex',
    width: 0,
    height: 300
  }
});

class VerticalSlider extends Component {
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
        <div className={this.props.classes.root}>
          <Slider
            vertical
            value={value}
            min={0}
            max={1}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

VerticalSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerticalSlider);
