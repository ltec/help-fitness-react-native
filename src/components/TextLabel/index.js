import React from 'react';
import { Text } from 'react-native';

export default TextLabel = ({ children, style }) => (
    <Text style={style}>
        {children}
    </ Text>
)