import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Component that helps dynamically load other React components.
 *
 * @author Hari Gangadharan
 */
class ComponentLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null
    }
  }

  componentWillMount() {
    import(`../components/${this.props.name}`).then(
      component => {
        this.setState({
          component: component.default
        });
      }
    );
  }

  render() {
    if (this.state.component) {
      return (
        <this.state.component />
      );
    }
    return null;
  }
}

ComponentLoader.propTypes = {
  name: PropTypes.string
};

export default ComponentLoader;
