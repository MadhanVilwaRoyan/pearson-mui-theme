import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';

import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import CodeBlock from './CodeBlock';
import GithubIcon from './GithubIcon';

import './styles/CodeRenderer.css';

const GITHUB_RAW_PATH = 'https://raw.githubusercontent.com/Pearson-Higher-Ed/pearson-mui-theme';
const GITHUB_CODE_PATH = 'https://github.com/Pearson-Higher-Ed/pearson-mui-theme/blob';
const REPO_RELATIVE_PATH = 'master/example/src/components';

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
  },
  button: {
  }
});

class CodeRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      source: '',
      code: '',
      repoCodePath: '',
      showCode: false
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  componentWillMount() {
    let name = this.props.name;
    axios.get(`/docs/${name}.md`).then(
      (response) => {
        this.setState({ markdown: response.data })
      }
    );
    const rawCodePath = `${GITHUB_RAW_PATH}/${REPO_RELATIVE_PATH}/${name}.jsx`;
    const repoCodePath = `${GITHUB_CODE_PATH}/${REPO_RELATIVE_PATH}/${name}.jsx`;
    axios.get(rawCodePath).then(
      (response) => {
        const code = response.data;
        this.setState({ source: response.data, code: code, repoCodePath})
      }
    );
    import(`../components/${this.props.name}`).then(
      component => {
        console.log(component);
        console.log(React.isValidElement(component.default));
        this.setState({
          component: component.default
        });
      }
    );
  }

  handleCodeClick = () => {
    this.setState({ showCode: !this.state.showCode })
  };

  handleGithubClick = () => {
    window.open(this.state.repoCodePath, '_blank');
  };

  renderCodeBlock = () => (
    this.state.showCode ? (
      <div className="code-block">
        <CodeBlock language='javascript' value={this.state.code} />
      </div>
    ) : null
  );

  render() {
    const { classes } = this.props;
    return (
      <div className="code-renderer">
        <Paper className={classes.root} elevation={1}>
          <ReactMarkdown source={this.state.markdown} />
          <div className="header">
            <IconButton className={classes.button} aria-label="See Code" onClick={this.handleGithubClick}>
              <GithubIcon />
            </IconButton>
            <IconButton className={classes.button} aria-label="See Code" onClick={this.handleCodeClick}>
              <CodeIcon />
            </IconButton>
          </div>
          {this.renderCodeBlock()}
          <div>
            {this.state.component ? <this.state.component /> : null}
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(CodeRenderer)
