import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import './styles/Markdown.css';

/**
 * A Component that helps render markdown content provided.
 *
 * @author Hari Gangadharan
 */
export default class Markdown extends React.PureComponent {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="markdown">
        <ReactMarkdown
          source={this.props.source}
          renderers={{
            code: CodeBlock
          }}
        />
      </div>
    );
  }
}
