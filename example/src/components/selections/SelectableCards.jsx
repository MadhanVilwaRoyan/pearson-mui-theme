import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import { icons, CardList } from 'pearson-mui-theme';

const styles = theme => ({
  card: {
    maxWidth: 350,
    height: 300,
    marginBottom: 24
  },
  value: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  icon: {
    width: theme.pearson.iconSize.normal
  }
});

/**
 * Renders/demos Selectable Cards.
 *
 * @author Hari Gangadharan
 */
class SelectableCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: false,
      checkedB: true,
      checkedC: false,
      checkedD: false
    };
  }

  handleChange = name => (event, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CardList>
          <Card className={classes.card}>
            <CardActions>
              <Checkbox
                checked={this.state.checkedA}
                icon={icons.checkbox.fancy.unchecked}
                checkedIcon={icons.checkbox.fancy.checked}
                onChange={this.handleChange('checkedA')}
                value="checkedB"
                color="primary"
              />
            </CardActions>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardActions>
              <Checkbox
                checked={this.state.checkedB}
                icon={icons.checkbox.fancy.unchecked}
                checkedIcon={icons.checkbox.fancy.checked}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            </CardActions>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
              <Divider />
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardActions>
              <Checkbox
                checked={this.state.checkedC}
                icon={icons.checkbox.fancy.unchecked}
                checkedIcon={icons.checkbox.fancy.checked}
                onChange={this.handleChange('checkedC')}
                value="checkedB"
                color="primary"
              />
            </CardActions>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardActions>
              <Checkbox
                checked={this.state.checkedD}
                icon={icons.checkbox.fancy.unchecked}
                checkedIcon={icons.checkbox.fancy.checked}
                onChange={this.handleChange('checkedD')}
                value="checkedB"
                color="primary"
              />
            </CardActions>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
          </Card>
        </CardList>
      </div>
    )
  }
}

SelectableCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectableCards);
