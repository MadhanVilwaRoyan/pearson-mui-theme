import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import { icons, CardList } from 'pearson-mui-theme';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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
    return (
      <div>
        <CardList>
          <Card>
            <CardHeader
              className="small"
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella September 14, 2016 and long header that will not stop here   "
            />
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Checkbox
                checked={this.state.checkedA}
                icon={icons.checkbox.fancy.unchecked}
                checkedIcon={icons.checkbox.fancy.checked}
                onChange={this.handleChange('checkedA')}
                value="checkedB"
                color="primary"
              />
              <div>JUNE 14, 2019</div>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
              <Divider />
            </CardContent>
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
          </Card>
          <Card>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
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
          </Card>
          <Card>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
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
          </Card>
        </CardList>
      </div>
    )
  }
}

export default SelectableCards;
