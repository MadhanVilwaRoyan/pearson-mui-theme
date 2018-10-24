import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Markdown from './Markdown'
import axios from 'axios'
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: 30,
    paddingBottom: theme.spacing.unit,
    margin: `${theme.spacing.unit}px auto`,
    maxWidth: 580,
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing.unit
    }
  }
});

class SampleRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    }
  }

  componentWillMount() {
    let name = this.props.component.type.displayName || this.props.component.type.name;
    const index = name.lastIndexOf('(');
    if (index > 0) {
      const endIndex = name.indexOf(')');
      name = name.substr(index + 1, endIndex - index -1);
    }
    axios.get(`/docs/${name}.md`).then(
      (response) => {
        this.setState({markdown: response.data})
      }
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Markdown source={this.state.markdown} />
        </Paper>
        {this.props.component}
      </div>
    )
  }
}

export default withStyles(styles)(SampleRenderer)
