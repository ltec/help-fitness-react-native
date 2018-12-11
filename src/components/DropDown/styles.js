import React from 'react';
import { StyleSheet } from 'react-native';
import { primary, secondary } from '../../assets/colors';

export default styles = StyleSheet.create({
    dropDown: {
        height: 50,
        width: 300,
        color: secondary
    },
    itemStyle: {
        backgroundColor: primary,
        borderColor: secondary,
        borderWidth: 1,
        borderRadius: 5
    }
})