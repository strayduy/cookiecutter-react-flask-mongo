// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as exampleActions from '../actions/exampleActions'

class ExampleComponent extends Component {
  componentDidMount() {
    this.props.actions.getAsyncData();
  }

  render() {
    const { greeting,
            hasLoadedMessage,
            message } = this.props;

    return (
      <div className="ExampleComponent">
        <div>{ greeting }</div>
        <div>{ hasLoadedMessage ? message : "Loading..." }</div>
      </div>
    );
  }
}

ExampleComponent.propTypes = {
  greeting: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    hasLoadedMessage: state.exampleState.hasLoadedMessage,
    message: state.exampleState.message
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(exampleActions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
