import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export const RowHorizontal = ({ children}) => (
    <View style={styles.rowHorizontal}>
        {children}
    </ View>
)