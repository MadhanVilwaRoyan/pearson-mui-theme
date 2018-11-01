import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Markdown from './Markdown';

const GITHUB_DOC_ROOT = '/docs';

/**
 * A Component that helps download and render markdown from public/docs folder.
 *
 * @author Hari Gangadharan
 */
class MarkdownContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    }
  }


  componentWillMount() {
    axios.get(`${GITHUB_DOC_ROOT}/${this.props.name}.md`).then(
      (response) => {
        this.setState({ markdown: response.data })
      }
    );
  }

  render() {
    return (
      <Markdown source={this.state.markdown} />
    );
  }
}

MarkdownContainer.propTypes = {
  name: PropTypes.string
};

export default MarkdownContainer;
