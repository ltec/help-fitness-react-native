import React from 'react';
import PropTypes from 'prop-types';

export default onPressDefinition = (Component, onPress) => (<Component onPress={this.onPress} />);

onPressDefinition.propTypes = {
    onPress: PropTypes.func
}