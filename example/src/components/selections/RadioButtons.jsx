import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { icons } from 'pearson-mui-theme';

const styles = theme => ({
  value: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  icon: {
    width: theme.pearson.iconSize.normal
  }
});

/**
 * Renders/demos Basic Slider.
 *
 * @author Hari Gangadharan
 */
class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.value}>Selection: {value}</div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">
            How did European scientists and writers in the nineteenth century attempt to make sense of
            the differences in the appearance and behavior they observed between themselves and non-Europeans?
          </FormLabel>
          <RadioGroup
            aria-label="Answer by choosing one"
            name="european-scientists"
            className={classes.group}
            value={value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="answer1"
              control={<Radio color="primary" />}
              label={
                `They concluded that differences in behavior were cultural and claimed that non-Europeans developed
                 different cultures because they faced different challenges in their respective environments.`
              }
            />
            <FormControlLabel
              value="answer2"
              control={<Radio color="primary" />}
              label={
                `They concluded that differences in behavior were the result of different economic systems. Europeans
                lived in a capitalist system whereas non-Europeans lived in a socialist system.`
              }
            />
            <FormControlLabel
              value="answer3"
              control={<Radio color="primary" />}
              label={
                `They didn't care.`
              }
            />
            <FormControlLabel
              value="answer4"
              control={<Radio color="primary" />}
              label={
                <div>
                  <span>D.</span>
                  <span>They concluded that differences in behavior were biological and claimed that people's biology
                  determined how their societies were organized.</span>
                </div>
              }
            />
            <FormControlLabel
              value="disabledAnswer"
              disabled
              control={<Radio />}
              label={
                `(Disabled choice) They concluded that differences in behavior were the result of astrological forces,
                 which could be ascertained by carefully charting the positions of stars and planets in the night sky.`
              }
            />
          </RadioGroup>
          <FormHelperText>Hint: They really didn't care!</FormHelperText>
        </FormControl>
      </div>
    )
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
